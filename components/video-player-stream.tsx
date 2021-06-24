import { useWindowWidth } from '@react-hook/window-size'
import tc from '@replygirl/tc'
import classNames from 'classnames'
import { detect } from 'detect-browser'
import fetch from 'isomorphic-unfetch'
import type { FC } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import useDimensions from 'react-cool-dimensions'

import type { Video, StreamConfig } from '~/types'

interface VideoPlayerStreamProps {
  onRequestClose: () => void
  streamConfig: StreamConfig
}

const VideoPlayerStream: FC<VideoPlayerStreamProps> = ({
  onRequestClose,
  streamConfig: { videoConfig, chatConfig, actions, discordInviteUrl },
}) => {
  const videoIframe = useRef<HTMLIFrameElement>(null)
  const videoPlayer = useRef<any | null>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const [browserName, setBrowserName] = useState<string | false | null>(null)
  const getBrowserName = () => setBrowserName(detect()?.name ?? false)

  const [showCompatWarning, setShowCompatWarning] = useState(true)

  const [video, setVideo] = useState<Video | null>(null)
  const getVideo = useCallback(async () => {
    const [r, e] = await tc(() =>
      fetch(`https://${videoConfig.baseUrl}/api/v1/videos/${videoConfig.id}`)
    )

    if (!e) {
      setVideo((await r?.json()) ?? null)
    }
  }, [videoConfig])

  const play = useCallback(() => {
    videoPlayer.current?.[videoPlaying ? 'pause' : 'play']?.()
    setVideoPlaying(!videoPlaying)
  }, [videoPlaying])

  useEffect(() => {
    getVideo()
    getBrowserName()
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [videoConfig, chatConfig, getVideo])

  useEffect(() => {
    if (videoIframe.current && !videoPlayer.current)
      (async () => {
        const { PeerTubePlayer } = await import('@peertube/embed-api')
        const pt = new PeerTubePlayer(videoIframe.current!)
        await pt.ready
        videoPlayer.current = pt
        if (!videoPlaying) play()
      })()
  }, [play, videoPlaying])

  const [videoIframeHeight, setVideoIframeHeight] = useState(0)
  const windowWidth = useWindowWidth()
  const { observe, width } = useDimensions({
    onResize: ({ width, height }) =>
      setVideoIframeHeight(windowWidth >= 1024 ? height : (width * 9) / 16),
  })

  return (
    <div
      className={classNames(
        'absolute inset-0 bg-black flex flex-col lg:flex-row',
        {
          'justify-center items-center': !video,
        }
      )}
    >
      {video === null ? (
        <p className='color-white align-middle'>Loading...</p>
      ) : (
        <>
          <div
            className='relative max-h-full aspect-9/16 h-0 lg:(aspect-none h-auto flex-grow)'
            ref={observe}
          >
            <iframe
              allow='autoplay'
              allowFullScreen
              className='lg:(h-full w-full)'
              frameBorder='0'
              ref={videoIframe}
              width={width}
              height={videoIframeHeight}
              sandbox='allow-same-origin allow-scripts allow-popups'
              src={`https://${videoConfig.baseUrl}${video.embedPath}?api=1&controls=false`}
            />
            <div
              className='absolute inset-center'
              onClick={e => {
                if (e.target === e.currentTarget) play()
              }}
            ></div>
            <ul className='absolute inset-x-0 top-0 bottom-auto h-auto flex justify-between items-center p-2 pb-8 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent text-white'>
              {actions?.map(({ text, href, target, color = 'inherit' }) => (
                <li key={text}>
                  <a
                    className='underline'
                    href={href ?? '/'}
                    target={target ?? '_self'}
                    style={{ color }}
                  >
                    {text ?? '✊'}
                  </a>
                </li>
              ))}
              <li
                className='w-6 text-2xl leading-6 text-center cursor-pointer -order-1 lg:order-none'
                role='button'
                onClick={onRequestClose}
              >
                ×
              </li>
            </ul>
            {!videoPlaying && (
              <button
                className='absolute h-auto w-auto inset-auto !inset-center bg-white border p-2'
                onClick={() => play()}
              >
                Play
              </button>
            )}
          </div>
          <iframe
            className='titanembed flex-1 lg:(flex-none)'
            src={`https://titanembeds.com/embed/${chatConfig.guildId}?css=${chatConfig.css}&defaultchannel=${chatConfig.channelId}&lang=en_EN`}
            frameBorder='0'
            title='discord-chat'
          />
          {showCompatWarning && browserName && browserName !== 'chrome' && (
            <div
              className='absolute inset-x-center bottom-4 z-1 border bg-white px-4 py-2 whitespace-nowrap flex justify-between items-baseline'
              style={{
                maxWidth: 'calc(100% - 40px)',
                width: 384,
              }}
            >
              <span>
                Chat works best in{' '}
                <a className='underline' href={discordInviteUrl}>
                  Discord
                </a>{' '}
                or Chrome
              </span>
              <button
                className='font-bold underline'
                onClick={() => setShowCompatWarning(false)}
              >
                Got it
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default VideoPlayerStream
