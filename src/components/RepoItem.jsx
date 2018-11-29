import React from 'react'
import Stat from './Stat'
import moment from 'moment'
import PropTypes from 'prop-types'

const RepoItem = ({
  name,
  fork,
  url,
  description,
  stargazers_count,
  watchers_count,
  language,
  updated_at,
  forks_count,
}) => {
  return (
    <li className="repoItem">
      <h3 className="repoItem__name">
        <a href={url} className="repoItem__link">
          {name}
        </a>
      </h3>

      <div className="repoItem__stats">
        <span>{language}</span>
        <Stat icon={'code-fork'} number={forks_count} />
        <Stat icon={'eye'} number={watchers_count} />
        <Stat icon={'star'} number={stargazers_count} />
      </div>

      {fork && (
        <span className="repoItem__fork">
          <i className="fa fa-code-fork" />
          Forkeado
        </span>
      )}
      <p className="repoItem__description">{description}</p>
      <span className="repoItem__date">Updated {moment(updated_at).fromNow()}</span>
    </li>
  )
}

RepoItem.propTypes = {
  name: PropTypes.string,
  fork: PropTypes.bool,
  url: PropTypes.string,
  description: PropTypes.string,
  stargazers_count: PropTypes.number,
  watchers_count: PropTypes.number,
  language: PropTypes.string,
  updated_at: PropTypes.string,
  forks_count: PropTypes.number,
}

export default RepoItem
