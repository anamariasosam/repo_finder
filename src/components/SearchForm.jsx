import React, { Component } from 'react'
import PropType from 'prop-types'

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: props.username,
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSearchInput(e) {
    e.preventDefault()
    this.props.handleSearchInput(this.state.username)
  }

  handleInputChange(e) {
    const username = e.target.value
    this.setState({
      username,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSearchInput} className="search-form">
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleInputChange}
          className="search-form__input"
        />
      </form>
    )
  }
}

SearchForm.propTypes = {
  username: PropType.string,
}

export default SearchForm
