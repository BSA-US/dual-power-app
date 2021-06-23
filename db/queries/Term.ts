import { Term } from '~/db/schema'

export const allTerms = (): string => `{
  allTerms {
    data {
      ${Term}
    }
  }
}`

export const findTermById = (id: number): string => `{
  findTermById(${id}) {
    ${Term}
  }
}`

export default {
  allTerms,
  findTermById,
}
