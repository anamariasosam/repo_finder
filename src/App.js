import React, { Component } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import RepoList from './components/RepoList'
import UserInfo from './components/UserInfo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: [],
      username: 'gaearon',
      notFound: false,
      user: {},
    }

    this.handleRepos = this.handleRepos.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(response => {
      if (response.ok) {
        response.json().then(repos => this.setState({ repos }))
      } else {
        this.setState({ repos: [], notFound: true })
      }
    })
  }

  handleUserInfo(username) {
    fetch(`https://api.github.com/users/${username}`).then(response => {
      if (response.ok) {
        response.json().then(user => this.setState({ user }))
      } else {
        this.setState({ user: {}, notFound: true })
      }
    })
  }

  componentDidMount() {
    this.handleRepos(this.state.username)
    this.handleUserInfo(this.state.username)
  }

  handleSearchInput(username) {
    this.handleRepos(username)
    this.handleUserInfo(username)
  }

  render() {
    const { notFound } = this.state
    return (
      <div className="repo-finder">
        <UserInfo avatar_url={this.state.user.avatar_url} name={this.state.user.name} />
        <SearchForm username={this.state.username} handleSearchInput={this.handleSearchInput} />
        <RepoList repos={this.state.repos} handleSearchInput={this.handleSearchInput} />
        {notFound && <p>There are no repositories available</p>}
      </div>
    )
  }
}

export default App
