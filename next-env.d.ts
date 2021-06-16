/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.styl' {
  const content: { [className: string]: string }
  export default content
}

declare module '@peertube/embed-api' {
  export class PeerTubePlayer extends HTMLVideoElement {
    ready: Promise<boolean>

    constructor(iframe: HTMLIFrameElement)

    setResolution(x: number): void
    setVolume(x: number): void
  }
}
