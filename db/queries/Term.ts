import { Term } from '~/db/schema'

export function allTerms(): string {
  return `{
  allTerms {
    data {
      ${Term}
    }
  }
}`
}

export function findTermById(id: number): string {
  return `{
  findTermById(${id}) {
    ${Term}
  }
}`
}

export default {
  allTerms,
  findTermById,
}
