import { NowRequest, NowResponse } from '@now/node';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export default (_req: NowRequest, res: NowResponse) => {
  const api_call = fetch('https://api.github.com/repos/BSA-US/Dual-Power-App-Client/projects', {
    headers: {
      'Accept': 'application/vnd.github.inertia-preview+json'
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  res.json({ name: 'John', email: 'john@example.com' })
}
