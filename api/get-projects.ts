import { Octokit } from "@octokit/rest";
// import { createOAuthAppAuth } from "@octokit/auth-oauth-app";

var token = process.env.TOKEN;

// Find the correct project
function findRoadmap(projectList) {
  for (var i=0; i < projectList.length; i++)
    if (projectList[i].name === 'Roadmap') {
      return projectList[i]
    }
  return projectList[0];
}

const main = async () => {
    try {
        // TODO: Use OAuthApp to authenticate
        // const auth = createOAuthAppAuth({
        //   clientId: "id",
        //   clientSecret: "secret"
        // });
        //
        // const appAuthentication = await auth({
        //   type: "oauth-app"
        // });

        const octokit = new Octokit({
          // authStrategy: createOAuthAppAuth,
          auth: token,
          userAgent: 'Dual Power App Teaser Page',
          previews: ['inertia-preview'],
          baseUrl: 'https://api.github.com'
        });

        // Find the list of projects
        octokit.projects
          .listForRepo({
            owner: "BSA-US",
            repo: "dual-power-app"
          })
          // Select the Roadmap
          .then(({ data, headers, status }) => {
            console.log(findRoadmap(data))
          });
    } catch (err) {
        console.log('error',err);
        return err;
    }
};

main ()
