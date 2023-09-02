const {sum, fetchGitHubRepos} = require('./functions');
const axios = require('axios');
const {test, expect} = require('@jest/globals');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

jest.mock('axios');

test('fetches GitHub repos', async () => {
    const data = [
        {html_url: 'http://localhost:3000/fake-github-organization/repo1'},
        {html_url: 'http://localhost:3000/fake-github-organization/repo2'}];
    axios.get.mockResolvedValue({data});
    const repositoryUrls = await fetchGitHubRepos('fake-github-organization');
    expect(repositoryUrls).toHaveLength(2);
});
