import React from "react";

import "./styles.css";

const Character = props => {
  console.log(props)

  let gearCol1 = props.items.itemList.slice(0, 7).map((item, i) => {
    return (<div key={i} className="gear-item">
      <a
        href={`http://www.wowhead.com/item=${
          item.id
          }`}
      >
        <img
          src={`https://wow.zamimg.com/images/wow/icons/large/${
            item.icon
            }.jpg`}
          alt="armor-icon"
          className={`indiv-item-image item-${item.quality}`}
        />
      </a>
    </div>)
  });

  let gearCol2 = props.items.itemList.slice(7, 14).map((item, i) => {
    return (<div key={i} className="gear-item">
      <a
        href={`http://www.wowhead.com/item=${
          item.id
          }`}
      >
        <img
          src={`https://wow.zamimg.com/images/wow/icons/large/${
            item.icon
            }.jpg`}
          alt="armor-icon"
          className={`indiv-item-image item-${item.quality}`}
        />
      </a>
    </div>)
  });

  return (
    <div>
      {/* Mobile section of character display */}
      <div className="character-container" id="mobile-character">
        <img
          src={`https://render-us.worldofwarcraft.com/character/${
            props.profile.thumbnail
            }`}
          alt="amilanae-avatar"
          className="character-avatar"
        />
        <div className="character-info">
          <p>
            <span className="white-text">{props.profile.name}</span>
            <br />
            <span className="gold-text">Level {props.profile.level}</span>
            <span className="orange-text"> Restoration Druid</span>
          </p>
          <p className="white-text">
            Item Level: <span className="purple-text">{props.items.iLvl}</span>
          </p>
        </div>
      </div>
      {/* Desktop section of character display */}
      <div id="character-desktop">
        <div className="character-panel">
          {/* The clone of the world of warcraft character profile */}
          <div className="character-gear-panel">
            <div className="gear-panel-top">
              <img
                className="resto-icon"
                src="http://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg"
                alt="restoration-druid-class-icon"
              />
              <div className="panel-top-titles">
                <p className="white-text">Amilanae</p>
                <p>
                  <span className="gold-text">Level 110</span>{" "}
                  <span className="orange-text">Restoration Druid</span>
                </p>
              </div>
            </div>
            <div className="gear-panel-bot">
              <div className="gear-main-columns">
                <div className="gear-column">
                  {gearCol1}
                </div>
                <div className="gear-img" />
                <div className="gear-column">
                  {gearCol2}
                </div>
              </div>
              <div className="gear-bottom-row">
                <div className="gear-item">
                  <a
                    href={`http://www.wowhead.com/item=${
                      props.items.itemList[14].id
                      }`}
                  >
                    <img
                      src={`https://wow.zamimg.com/images/wow/icons/large/${
                        props.items.itemList[14].icon
                        }.jpg`}
                      alt="armor-icon"
                      className={`indiv-item-image item-${props.items.itemList[14].quality}`}
                    />
                  </a>
                </div>
                <div className="gear-weapons">
                  <div className="gear-item">
                    <a
                      href={`http://www.wowhead.com/item=${
                        props.items.itemList[15].id
                        }`}
                    >
                      <img
                        src={`https://wow.zamimg.com/images/wow/icons/large/${
                          props.items.itemList[15].icon
                          }.jpg`}
                        alt="armor-icon"
                        className={`indiv-item-image item-${props.items.itemList[15].quality}`}
                      />
                    </a>
                  </div>
                  <div className="gear-item">
                    <img
                      src={require("./shield-icon.png")}
                      alt="armor-icon"
                      className="indiv-item-image"
                    />
                  </div>
                </div>
                <div className="gear-item">
                  <a
                    href={`http://www.wowhead.com/item=${
                      props.items.itemList[16].id
                      }`}
                  >
                    <img
                      src={`https://wow.zamimg.com/images/wow/icons/large/${
                        props.items.itemList[16].icon
                        }.jpg`}
                      alt="armor-icon"
                      className={`indiv-item-image item-${props.items.itemList[16].quality}`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="character-stat-panel">
            <div className="stat-section">
              Item Level
              <ul className="stat-list">
                <li className="purple-text">{props.items.iLvl}</li>
              </ul>
            </div>
            <div className="stat-section">
              Attributes<ul className="stat-list">
                <li>
                  <span className="gold-text">Intellect: </span>
                  {props.stats.int}
                </li>
                <li>
                  <span className="gold-text">Stamina: </span>
                  {props.stats.sta}
                </li>
                <li>
                  <span className="gold-text">Armor: </span>
                  {props.stats.armor}
                </li>
                <li>
                  <span className="gold-text">Mana Regen: </span>
                  {props.stats.mana5}
                </li>
              </ul>
            </div>
            <div className="stat-section">
              Enchancements<ul className="stat-list">
                <li>
                  <span className="gold-text">Critical Strike: </span>
                  {props.stats.crit.toFixed(2)}%
                </li>
                <li>
                  <span className="gold-text">Haste: </span>
                  {props.stats.haste.toFixed(2)}%
                </li>
                <li>
                  <span className="gold-text">Mastery: </span>
                  {props.stats.mastery.toFixed(2)}%
                </li>
                <li>
                  <span className="gold-text">Versatility: </span>
                  {props.stats.versatilityHealingDoneBonus.toFixed(2)}%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
