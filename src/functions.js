const axios = require('axios');

/**
 * A toy function that adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
}

/**
 * Fetch the GitHub repositories of a user or organization.
 * This function calls the GitHub REST API to get an array of the repository URLs.
 *
 * @param {string} username - The GitHub username or organization name to look up.
 * @return {Promise<string[]>} A Promise that resolves to an array of repository URLs.
 */
async function fetchGitHubRepos(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data.map(repo => repo.html_url);
    } catch (error) {
        console.error(`Failed to fetch repositories for ${username}: ${error}`);
        return [];
    }
}


module.exports = {
    sum,
    fetchGitHubRepos
}
