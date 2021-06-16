// import { PeerTubePlayer } from '@peertube/embed-api'
import { useWindowWidth } from '@react-hook/window-size'
import tc from '@replygirl/tc'
import { detect } from 'detect-browser'
import fetch from 'isomorphic-unfetch'
import type { FunctionComponent } from 'react'
import { useEffect, useRef, useState } from 'react'
import useDimensions from 'react-cool-dimensions'

import cn from '~/styles/components/video-player-stream.styl'
import type { Video, StreamConfig } from '~/types'

interface VideoPlayerStreamProps {
  onClose: () => void
  streamConfig: StreamConfig
}

const VideoPlayerStream: FunctionComponent<VideoPlayerStreamProps> = ({
  onClose,
  streamConfig: { videoConfig: v, chatConfig: c }
}) => {
  const videoIframe = useRef<HTMLIFrameElement>(null)
  const videoPlayer = useRef<any | null>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const [browserName, setBrowserName] = useState<string | false | null>(null)
  const getBrowserName = () => setBrowserName(detect()?.name ?? false)

  console.log(browserName)

  const [video, setVideo] = useState<Video | null>(null)
  const getVideo = async () => {
    const [r, e] = await tc(() =>
      fetch(`https://${v.baseUrl}/api/v1/videos/${v.id}`)
    )

    if (!e) {
      setVideo((await r?.json()) ?? null)
    }
  }

  useEffect(() => {
    getVideo()
    getBrowserName()
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [v, c])

  useEffect(() => {
    if (videoIframe.current && !videoPlayer.current)
      (async () => {
        const { PeerTubePlayer } = await import('@peertube/embed-api')
        const pt = new PeerTubePlayer(videoIframe.current!)
        await pt.ready
        videoPlayer.current = pt
        // pt.setResolution(5)
        // pt.setVolume(100)
        if (!videoPlaying) play()
      })()
  }, [videoIframe.current])

  const play = () => {
    videoPlayer.current?.[videoPlaying ? 'pause' : 'play']?.()
    setVideoPlaying(!videoPlaying)
  }

  const { observe, width, height } = useDimensions()
  const windowWidth = useWindowWidth()

  return (
    <div
      className={cn['video-player-stream']}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {video === null ? (
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ color: 'white', verticalAlign: 'middle' }}>Loading...</p>
        </div>
      ) : (
        <div>
          <div className={cn.video} ref={observe}>
            <iframe
              allow="autoplay"
              allowFullScreen
              frameBorder="0"
              ref={videoIframe}
              width={width}
              height={windowWidth >= 1280 ? height : (width * 9) / 16}
              sandbox="allow-same-origin allow-scripts allow-popups"
              src={`https://${v.baseUrl}${video.embedPath}?api=1&controls=false`}
            />
            <div
              onClick={() => play()}
              style={{
                position: 'absolute',
                inset: 0
              }}
            ></div>
            <button className={cn.close} onClick={onClose}>
              ×
            </button>
          </div>
          <iframe
            className={`titanembed ${cn.chat}`}
            src={`https://titanembeds.com/embed/${c.guildId}?css=${c.css}&defaultchannel=${c.channelId}&lang=en_EN`}
            frameBorder="0"
            title="discord-chat"
          />
        </div>
      )}
    </div>
  )
}

export default VideoPlayerStream
