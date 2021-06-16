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
  streamConfig: { videoConfig, chatConfig, actions, discordInviteUrl }
}) => {
  const videoIframe = useRef<HTMLIFrameElement>(null)
  const videoPlayer = useRef<any | null>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const [browserName, setBrowserName] = useState<string | false | null>(null)
  const getBrowserName = () => setBrowserName(detect()?.name ?? false)

  const [showCompatWarning, setShowCompatWarning] = useState(true)

  const [video, setVideo] = useState<Video | null>(null)
  const getVideo = async () => {
    const [r, e] = await tc(() =>
      fetch(`https://${videoConfig.baseUrl}/api/v1/videos/${videoConfig.id}`)
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
  }, [videoConfig, chatConfig])

  useEffect(() => {
    if (videoIframe.current && !videoPlayer.current)
      (async () => {
        const { PeerTubePlayer } = await import('@peertube/embed-api')
        const pt = new PeerTubePlayer(videoIframe.current!)
        await pt.ready
        videoPlayer.current = pt
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
              src={`https://${videoConfig.baseUrl}${video.embedPath}?api=1&controls=false`}
            />
            <div
              onClick={(e) => {
                if (e.target === e.currentTarget) play()
              }}
              style={{
                position: 'absolute',
                inset: 0
              }}
            ></div>
            <ul className={cn.actions}>
              {actions?.map(({ text, href, target, color = 'inherit' }) => (
                <li key={text}>
                  <a
                    href={href ?? '/'}
                    target={target ?? '_self'}
                    style={{ color }}
                  >
                    {text ?? '✊'}
                  </a>
                </li>
              ))}
              <li className={cn.close} role="button" onClick={onClose}>
                ×
              </li>
            </ul>
          </div>
          <iframe
            className={`titanembed ${cn.chat}`}
            src={`https://titanembeds.com/embed/${chatConfig.guildId}?css=${chatConfig.css}&defaultchannel=${chatConfig.channelId}&lang=en_EN`}
            frameBorder="0"
            title="discord-chat"
          />
          {showCompatWarning && browserName && browserName !== 'chrome' && (
            <div
              style={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
                border: '1px solid black',
                backgroundColor: 'white',
                padding: 10,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                width: 384,
                maxWidth: 'calc(100% - 40px)',
                fontFamily:
                  'Helvetica Now, Helvetica Neue, Helvetica, Arial, sans-serif'
              }}
            >
              <span>
                Chat works best in{' '}
                <a style={{ color: 'inherit' }} href={discordInviteUrl}>
                  Discord
                </a>{' '}
                or Chrome
              </span>
              <button
                style={{
                  fontSize: 'inherit',
                  fontFamily: 'inherit',
                  fontWeight: 'bold',
                  margin: 0,
                  marginLeft: 10,
                  textDecoration: 'underline',
                  background: 'transparent',
                  border: 0,
                  padding: 0
                }}
                onClick={() => setShowCompatWarning(false)}
              >
                Got it
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default VideoPlayerStream
