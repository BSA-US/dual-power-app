import mockCircles from './mock-circle-data.json'
import mockCircleMemberships from './mock-circle-membership-data.json'
import mockUsers from './mock-user-data.json'

export const useMockData = () => {
  return {
    circleMemberships: mockCircleMemberships.circleMemberships,
    circles: mockCircles.circles,
    users: mockUsers.users,
  }
}
