import React, { Component, useDebugValue } from "react";
import Search from "./Search";
import "./UserView.css";
import locationSVG from "./assets/icon-location.svg";
import twitterSVG from "./assets/icon-twitter.svg";
import websiteSVG from "./assets/icon-website.svg";
import companySVG from "./assets/icon-company.svg";

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.message === "Not Found") {
      return false;
    }
    return true;
  }

  render() {
    console.log("Error Tracking in UserView");
    console.log(this.props.message);
    let stringBio = "";
    if (this.props.bio === null) {
      stringBio = "This profile has no bio";
    } else {
      stringBio = this.props.bio;
    }

    return (
      <div className="UserView  .theme-light">
        <div className="UserTop">
          <img src={this.props.avatar}></img>
          <div className="UserInfo">
            <div className="container">
              <h3 className="Name">{this.props.name}</h3>
              <p className="Joined">Joined {this.props.created}</p>
            </div>

            <p className="Login">{this.props.login}</p>
            <p className="Bio">{stringBio}</p>
          </div>
        </div>
        <div className="repoInfo">
          <div className="repoTitles">
            <p>Repos</p>
            <p>Followers</p>
            <p>Following</p>
          </div>
          <div className="repoCount">
            <p>{this.props.repos}</p>
            <p>{this.props.followers}</p>
            <p>{this.props.following}</p>
          </div>
        </div>
        <div className="contactInfo">
          <div className="location">
            <img src={locationSVG}></img>
            <p>{this.props.location}</p>
          </div>
          <div className="twitter">
            <img src={twitterSVG}></img>
            <p>{this.props.twitter}</p>
          </div>
          <div className="website">
            <img src={websiteSVG}></img>
            <p>{this.props.blog}</p>
          </div>
          <div className="company">
            <img src={companySVG}></img>
            <p>{this.props.company}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserView;
