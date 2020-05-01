import fetch from 'isomorphic-unfetch'

const { API_HOST: host = 'http://localhost:3000' } = process.env

// Generic API request
interface ApiProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  path: string
  body?: object
}
const api = async ({ method, path, body }: ApiProps): Promise<object> => {
  const res = await fetch(`${host}/api${path}`, {
    method,
    body: JSON.stringify(body)
  })
  return await res.json()
}

// GET request
type GetProps = string | { path: string }
export const get = async (p: GetProps): Promise<object> => await api({
  method: 'GET',
  path: typeof p==='string' ? p : p.path
})

// POST request
interface PostProps {
  path: string
  body: object
}
export const post = async ({ path, body }: PostProps): Promise<object> =>
  await api({ method: 'POST', path, body })

export default api
