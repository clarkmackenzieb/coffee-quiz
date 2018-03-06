import React from "react";

import moment from "moment";
import "./styles.css";

const Status = props => {
  let progressionCheck = "";
  let realmDisplay = "";
  let statusCheck = "";
  let queueCheck = "";

  console.log(props);
  if (props.progression) {
    progressionCheck = props.progression.map((raid, i) => {
      let lfr = 0;
      let n = 0;
      let h = 0;
      let m = 0;
      raid.bosses.map((boss, j) => {
        if (boss.lfrKills) {
          lfr += 1;
        }
        if (boss.normalKills) {
          n += 1;
        }
        if (boss.heroicKills) {
          h += 1;
        }
        if (boss.mythicKills) {
          m += 1;
        }
        return true;
      });
      return (
        <div key={i} className="progression-row">
          <p>
            {lfr} / {raid.bosses.length}
          </p>
          <p>
            {n} / {raid.bosses.length}
          </p>
          <p>
            {h} / {raid.bosses.length}
          </p>
          <p>
            {m} / {raid.bosses.length}
          </p>
        </div>
      );
    });
  }

  if (props.realm) {
    props.realm.status
      ? (statusCheck = "status-true")
      : (statusCheck = "status-false");
    !props.realm.queue
      ? (queueCheck = "No Queue")
      : (queueCheck = "Realm Full");
    realmDisplay = (
      <div className={`realm-status ${statusCheck}`}>
        <h2>{props.realm.name}</h2>
        <h3>Population: {props.realm.population}</h3>
        <h3>{props.realm.status && queueCheck}</h3>
      </div>
    );
  }

  return (
    <div>
      <div className="realm-raid-upper-status">
        {realmDisplay}
        <div className="raid-display">
          {moment().day() === 5 || moment().day() === 6 ? (
            <div className="raid-true">Raid Tonight!</div>
          ) : (
            <div className="raid-false">No Raid Tonight</div>
          )}
          <div>{moment().format("dddd, MMMM Do YYYY")}</div>
        </div>
      </div>
      <h3>Progression Status</h3>
      <div className="progression-container">
        <p className="progression-name">
          <span>Type</span>
          <span>EN</span>
          <span>ToV</span>
          <span>NH</span>
          <span>ToS</span>
          <span>ATBT</span>
        </p>
        <div className="progression-chart">
          <div className="progression-difficulty">
            <p>LFR</p>
            <p> N</p>
            <p> H</p>
            <p> M</p>
          </div>
          {progressionCheck}
        </div>
      </div>
    </div>
  );
};

export default Status;
