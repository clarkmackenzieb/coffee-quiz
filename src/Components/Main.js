import React, { Component } from "react";
import axios from "axios";

import Character from "./Character";
import Status from "./Status";

import "./styles.css";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      items: "",
      profile: "",
      realm: "",
      stats: "",
      progression: "",
      feed: ""
    };
  }

  componentDidMount() {
    axios.get("/api/test").then(response => {
      console.log(response)
    })
    axios
      .get("/api/all")
      .then(response => {
        let tempArr = [];
        tempArr.push(
          response.data[1].progression.raids[35],
          response.data[1].progression.raids[36],
          response.data[1].progression.raids[37],
          response.data[1].progression.raids[38],
          response.data[1].progression.raids[39]
        );

        let itemList = [
          response.data[3].items.back,
          response.data[3].items.chest,
          response.data[3].items.feet,
          response.data[3].items.finger1,
          response.data[3].items.finger2,
          response.data[3].items.hands,
          response.data[3].items.head,
          response.data[3].items.legs,
          response.data[3].items.mainHand,
          response.data[3].items.neck,
          response.data[3].items.shirt,
          response.data[3].items.tabard,
          response.data[3].items.trinket1,
          response.data[3].items.trinket2,
          response.data[3].items.waist,
          response.data[3].items.wrist,
          response.data[3].items.shoulder
        ];
        this.setState({
          profile: response.data[0],
          progression: tempArr,
          stats: response.data[2].stats,
          realm: response.data[5].realms[0],
          items: {
            iLvl: response.data[3].items.averageItemLevelEquipped,
            itemList
          },
          feed: response.data[4].feed,
          loading: false
        });
      })
      .catch(console.log);
  }

  render() {
    let loadingPage = (
      <div className="main-background mobile-responsive loading">
        <h1>Loading...</h1>
      </div>
    );
    let contentPage = (
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
    return this.state.loading ? loadingPage : contentPage;
  }
}
