import type { ZeitRequest, ZeitResponse } from '../_types'

interface BaseProps {
  req: ZeitRequest,
  res: ZeitResponse
}

interface Props extends BaseProps {
  fn: (props: BaseProps) => object // TODO: Validate return type?
}

export default async ({ req, res, fn }: Props) => {
  try {
    const x = await fn({ req, res })
    console.log(x)

    res.json(x)
  }
  catch(error) {
    console.log(error)

    res.status(500).json({ error })
  }
}
