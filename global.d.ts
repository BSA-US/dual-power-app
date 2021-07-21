declare module '*.md' {
  const content: string
  export default content
}

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

declare module 'remark-react' {
  const remark2react: Parameters<ReturnType<typeof import('remark')>['use']>[0]
  export default remark2react
}
