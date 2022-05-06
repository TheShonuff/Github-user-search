import React, { Component, useEffect } from "react";
import UserView from "./UserView";
import "./Search.css";

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

  render() {
    const { erro, isLoaded, data } = this.state;
    console.log(data);
    return (
      <div className="Searchbar">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Github username..."
          ></input>
          <button type="submit">Search</button>
        </form>
        <UserView
          avatar={data.avatar_url}
          name={data.name}
          login={data.login}
          bio={data.bio}
          created={data.created_at}
        />
      </div>
    );
  }
}

export default Search;
