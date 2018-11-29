import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ avatar_url, name }) => (
  <div className="userInfo">
    <img src={avatar_url} alt="user profile img" className="userInfo__image" />
    <h1>{name}</h1>
  </div>
)

UserInfo.propTypes = {
  name: PropTypes.string,
  avatar_url: PropTypes.string,
}

UserInfo.defaultProps = {
  avatar_url: 'https://octodex.github.com/images/inspectocat.jpg',
}

export default UserInfo
