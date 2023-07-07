import type { ReactNode } from 'react'
import { Fragment, createElement } from 'react'
import rehypeFormat from 'rehype-format'
import rehypeReact from 'rehype-react'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeFormat)
  .use(rehypeReact, { Fragment, createElement })

export function useMarkdown(text: string | null | undefined) {
  const [content, setContent] = useState<ReactNode>(null)

  useEffect(() => {
    if (text) processor.process(text).then(x => setContent(x.result))
    else setContent(null)
  }, [text])

  return content
}
