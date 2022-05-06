import React, { Component, useDebugValue } from "react";
import Search from "./Search";
import "./UserView.css";

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="UserView">
        <div className="UserTop">
          <img src={this.props.avatar}></img>
          <div className="UserInfo">
            <h3 className="Name">{this.props.name}</h3>

            <p className="Login">{this.props.login}</p>
            <p className="Bio">{this.props.bio}</p>
          </div>
          <p className="Joined">{this.props.created}</p>
        </div>
      </div>
    );
  }
}

export default UserView;
