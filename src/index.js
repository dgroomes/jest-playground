const {fetchGitHubRepos} = require('./functions');

/*
This is a toy entrypoint for exercising the 'fetchGitHubRepos' function. You can think of this as the "main program"
and you should compare and contrast this with the way the Jest tests call the 'fetchGitHubRepos' function.
*/

const username = "dgroomes";
fetchGitHubRepos(username)
    .then(repoUrls => {
        console.log(`Found the following repo URLs for user '${username}':`, repoUrls);
    });
