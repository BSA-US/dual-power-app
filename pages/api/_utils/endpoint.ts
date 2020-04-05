import type { ZeitRequest, ZeitResponse } from '../_types'

interface BaseProps {
  req: ZeitRequest,
  res: ZeitResponse
}

interface Props extends BaseProps {
  fn: (props: BaseProps) => object // TODO: Validate return type?
}

export default ({ req, res, fn }: Props) => {
  try { res.json(fn({ req, res })) }
  catch(error) { res.status(500).json({ error }) }
}
