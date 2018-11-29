import React from 'react'
import PropType from 'prop-types'

const Stat = ({ number, icon }) => {
  return (
    <span>
      <i className={`fa fa-${icon}`} />
      {number}
    </span>
  )
}

Stat.propTypes = {
  number: PropType.number,
  icon: PropType.string,
}

export default Stat
