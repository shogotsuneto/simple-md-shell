import info from '../github-info'

const { owner, repo, branch } = info
const baseUrl = {
  api: 'https://api.github.com',
  raw: 'https://raw.githubusercontent.com'
}

export const fetchRawContent =  (filepath) =>
  fetch(`${baseUrl.raw}/${owner}/${repo}/${branch}/${filepath}`)
    .then(response => response.text())

export const fetchContentsList = (path = undefined) => 
  fetch(`${baseUrl.api}/repos/${owner}/${repo}/contents${path ? `/${path}` : '' }?ref=${branch}`)
    .then(response => response.json())