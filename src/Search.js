import React, { Component, useEffect } from "react";
import UserView from "./UserView";
import "./Search.css";
import search from "./assets/icon-search.svg";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let search = document.querySelector("#search");
    event.preventDefault();
    console.log(search.value);
    console.log("You Clicked Submit");
    fetch(`https://api.github.com/users/${search.value}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    console.log("Component Mounted and starting Load...");
    fetch("https://api.github.com/users/Octocat")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  render() {
    const { erro, isLoaded, data } = this.state;
    console.log(data);
    return (
      <div className="Search">
        <div className="Search-bar">
          <img src={search}></img>
          <form className="Search-Form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Github username..."
            ></input>
            <button id="submit" type="submit">
              Search
            </button>
          </form>
        </div>
        <UserView
          avatar={data.avatar_url}
          name={data.name}
          login={data.login}
          bio={data.bio}
          created={data.created_at}
          repos={data.public_repos}
          followers={data.followers}
          following={data.following}
          company={data.company}
          twitter={data.twitter_username}
          location={data.location}
          website={data.blog}
        />
      </div>
    );
  }
}

export default Search;
