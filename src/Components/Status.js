import React from "react";

// importing moment.js to handle everything time-related
import moment from "moment";

// importing stylesheet
import "./styles.css";

// I decided functional components would be most efficient w/ use of props
const Status = props => {
  // Setting variables that will late be re-assigned to JSX
  let progressionCheck = "";
  let realmDisplay = "";
  let statusCheck = "";
  let queueCheck = "";
  let achievements = "";

  // Setting the achievement section
  if (props.feed) {
    achievements = props.feed.filter(x => {
      return x.type === "ACHIEVEMENT";
    });
    achievements = achievements.map((ach, i) => {
      return (
        <div className="white-text achievement-card" key={i}>
          <img
            src={`https://wow.zamimg.com/images/wow/icons/large/
${ach.achievement.icon}.jpg`}
            alt="achievement-icon"
            className="achievement-image"
          />
          <h3>{ach.achievement.title}</h3>
          <p>{moment(ach.timestamp).format("dddd, MMMM Do YYYY")}</p>
          <p>{ach.achievement.description}</p>
        </div>
      );
    });
  }

  // Setting the progression section
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
        <div key={i} className="progression-row gold-text">
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

  // Setting the realm status section
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
    <div id="mobile-status">
      <div className="realm-raid-upper-status">
        {realmDisplay}
        <div className="raid-display">
          {moment().day() === 5 || moment().day() === 6 ? (
            <div className="raid-true white-text">Raid Tonight!</div>
          ) : (
            <div className="raid-false white-text">No Raid Tonight</div>
          )}
          <div className="gold-text">
            {moment().format("dddd, MMMM Do YYYY")}
          </div>
        </div>
      </div>
      <h3 className="white-text progression-title">Progression Status</h3>
      <div className="progression-container">
        <p className="progression-name white-text">
          <span>Type</span>
          <span>EN</span>
          <span>ToV</span>
          <span>NH</span>
          <span>ToS</span>
          <span>ATBT</span>
        </p>
        <div className="progression-chart">
          <div className="progression-difficulty white-text">
            <p>LFR</p>
            <p> N</p>
            <p> H</p>
            <p> M</p>
          </div>
          {progressionCheck}
        </div>
      </div>
      <div id="achievement-feed">
        <h3 className="white-text achievement-title">Achievement Feed</h3>
        <div className="desktop-feed">{achievements}</div>
      </div>
    </div>
  );
};

export default Status;
