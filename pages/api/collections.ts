import { ZeitRequest, ZeitResponse } from './_types'
import faunadb, { query as q } from 'faunadb';

const { FAUNADB_SECRET: secret } = process.env;

const client = secret ? new faunadb.Client({ secret }) : null

export default async (_req: ZeitRequest, res: ZeitResponse) => {
  try {
    let collections: Array<any> = []

    if (!client) return []

    await client
      .paginate(q.Collections())
      .map(ref => q.Get(ref))
      .each(page => {
        collections = collections.concat(page)
      })

    res.json({ collections })
  } catch (error) {
    res.status(500).json({ error })
  }
}
