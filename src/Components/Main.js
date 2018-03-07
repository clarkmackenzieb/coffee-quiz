import React, { Component } from "react";
import axios from "axios";

import Character from "./Character";
import Status from "./Status";

import "./styles.css";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: "",
      profile: "",
      realm: "",
      stats: "",
      progression: "",
      feed: ""
    };
  }

  componentDidMount() {
    // All the information couldn't be sent in one response, so I broke them up
    axios
      .get("http://localhost:3005/api/profile")
      .then(response => {
        this.setState({ profile: response.data });
      })
      .catch(console.log());
    axios
      .get("http://localhost:3005/api/progression")
      .then(response => {
        let tempArr = [];
        tempArr.push(
          response.data.progression.raids[35],
          response.data.progression.raids[36],
          response.data.progression.raids[37],
          response.data.progression.raids[38],
          response.data.progression.raids[39]
        );
        this.setState({ progression: tempArr });
      })
      .catch(console.log());
    axios
      .get("http://localhost:3005/api/stats")
      .then(response => {
        this.setState({ stats: response.data.stats });
      })
      .catch(console.log());
    axios
      .get("http://localhost:3005/api/realm")
      .then(response => {
        this.setState({ realm: response.data.realms[0] });
      })
      .catch(console.log());
    axios
      .get("http://localhost:3005/api/items")
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(console.log());
    axios
      .get("http://localhost:3005/api/feed")
      .then(response => {
        this.setState({ feed: response.data.feed });
      })
      .catch(console.log());
  }

  render() {
    return (
      <div className="main-background mobile-responsive">
        <Status
          realm={this.state.realm}
          feed={this.state.feed}
          progression={this.state.progression}
        />
        <Character
          profile={this.state.profile}
          stats={this.state.stats}
          items={this.state.items}
        />
      </div>
    );
  }
}
