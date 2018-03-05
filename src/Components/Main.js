import React, { Component } from "react";
import axios from "axios";

import Character from "./Character";
import Status from "./Status";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    //axios call
    axios
      .get("/api/info")
      .then(response => {
        console.log(response.data);
      })
      .catch(console.log());
  }

  render() {
    return (
      <div>
        <h1>Main</h1>
        <Character />
        <Status />
      </div>
    );
  }
}
