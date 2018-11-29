import React from 'react'
import RepoItem from './RepoItem'
import PropType from 'prop-types'

const RepoList = ({ repos }) => {
  return (
    <ul>
      {repos.map(repo => (
        <RepoItem
          key={repo.id}
          name={repo.name}
          fork={repo.fork}
          forks_count={repo.forks_count}
          url={repo.html_url}
          description={repo.description}
          stargazers_count={repo.stargazers_count}
          watchers_count={repo.watchers_count}
          language={repo.language}
          updated_at={repo.updated_at}
        />
      ))}
    </ul>
  )
}

RepoList.propTypes = {
  repos: PropType.array,
}

export default RepoList
