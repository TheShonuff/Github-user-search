import React, { Component, useEffect } from "react";
import UserView from "./UserView";
import "./Search.css";
import search from "./assets/icon-search.svg";

//experimental components
import { useTheme } from "./ThemeContext";
import { useState } from "react";

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
    // console.log(search.value);
    // console.log("You Clicked Submit");

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
    const { error, isLoaded, data } = this.state;
    let noResult = "";
    if (data.message === "Not Found") {
      noResult = "No Results";
    } else {
      noResult = "";
    }
    function DateFormat() {
      const months = [
        "null",
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      if (isLoaded && data.message !== "Not Found") {
        let DateString = data.created_at;

        const arr = DateString.split("-");
        console.log(arr);
        let Day = arr[2].slice(0, 2);
        let Month = arr[1];
        let MonthResult = parseInt(Month, 10);
        return `${Day} ${months[MonthResult]} ${arr[0]} `;
      }
    }
    const Date = DateFormat();

    return (
      <div className="Search">
        <div className="Header">
          <h1>devfinder</h1>
        </div>
        <div className="Search-bar">
          <img src={search}></img>
          <form className="Search-Form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Github username..."
            ></input>
            <p className="noResult">{noResult}</p>
            <button id="submit" type="submit">
              Search
            </button>
          </form>
        </div>
        <UserView
          message={data.message}
          avatar={data.avatar_url}
          name={data.name}
          login={data.login}
          bio={data.bio}
          created={Date}
          repos={data.public_repos}
          followers={data.followers}
          following={data.following}
          company={data.company}
          twitter={data.twitter_username}
          location={data.location}
          blog={data.blog}
        />
      </div>
    );
  }
}

export default Search;
