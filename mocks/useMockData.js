import mockCircles from './mock-circle-data.json'
import mockCircleMemberships from './mock-circle-membership-data.json'
import mockProposals from './mock-proposal-data.json'
import mockUsers from './mock-user-data.json'

export const useMockData = () => {
  return {
    circleMemberships: mockCircleMemberships.circleMemberships,
    circles: mockCircles.circles,
    proposals: mockProposals.proposals,
    users: mockUsers.users,
  }
}
