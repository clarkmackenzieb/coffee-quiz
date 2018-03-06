import React from "react";

import moment from "moment";

const Status = props => {
  let progressionCheck = "";
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
            {raid.name}&nbsp;
            {lfr} / {raid.bosses.length} &nbsp;
            {n} / {raid.bosses.length} &nbsp;
            {h} / {raid.bosses.length} &nbsp;
            {m} / {raid.bosses.length} &nbsp;
          </p>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="realm-status">
        <h2>{props.realm.name}</h2>
        <h3>{props.realm.status && "Online"}</h3>
        <h3>{props.realm.status && "No Queue"}</h3>
      </div>
      <div>
        {moment().day() === 5 || moment().day() === 6 ? (
          <div className="raid-true">Raid Tonight!</div>
        ) : (
          <div className="raid-false">No Raid Tonight</div>
        )}
      </div>
      <div className="progression-container">
        <p>Difficulty&nbsp;LFR&nbsp; N&nbsp; H&nbsp; M&nbsp;</p>
        {progressionCheck}
      </div>
    </div>
  );
};

export default Status;
