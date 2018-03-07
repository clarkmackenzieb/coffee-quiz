import React from "react";

import "./styles.css";

const Character = props => {

  return (
    <div>
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
            {props.profile.name}
            <br /> Level {props.profile.level}
          </p>
          <p>Item Level: {props.items.iLvl}</p>
        </div>
      </div>
      <div id="mobile-gear">
        <h3>Gear</h3>
        {props.items &&
          props.items.itemList.map((item, i) => {
            return (
              <div className="indiv-item" key={i}>
                <img
                  src={`https://wow.zamimg.com/images/wow/icons/large/${
                    item.icon
                  }.jpg`}
                  alt="armor-icon"
                  className="indiv-item-image"
                />
                <p>
                  {item.name}, {item.itemLevel}
                </p>
              </div>
            );
          })}
      </div>
      <div id="character-desktop">
        <div className="character-panel">
          <div className="character-gear-panel">
            <div className="gear-panel-top">
              <img
                className="resto-icon"
                src="http://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg"
                alt="restoration-druid-class-icon"
              />
              <div className="panel-top-titles">
                <p className="white-text">Amilanae</p>
                <p><span className="gold-text">Level 110</span> <span className="orange-text">Restoration Druid</span></p>
              </div>
            </div>
            <div className="gear-panel-bot">
              <div className="gear-main-columns">
                <div className="gear-column">
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[6].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[6].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[9].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[9].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
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
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[0].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[0].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[1].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[1].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[10].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[10].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[11].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[11].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="gear-img" />
                <div className="gear-column">
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[5].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[5].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
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
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[7].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[7].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[2].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[2].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[3].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[3].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[4].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[4].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[12].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[12].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="gear-bottom-row">
                <div className="gear-item">
                  {props.items.itemList && (
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
                        className="indiv-item-image"
                      />
                    </a>
                  )}
                </div>
                <div className="gear-weapons">
                  <div className="gear-item">
                    {props.items.itemList && (
                      <a
                        href={`http://www.wowhead.com/item=${
                          props.items.itemList[8].id
                        }`}
                      >
                        <img
                          src={`https://wow.zamimg.com/images/wow/icons/large/${
                            props.items.itemList[8].icon
                          }.jpg`}
                          alt="armor-icon"
                          className="indiv-item-image"
                        />
                      </a>
                    )}
                  </div>
                  <div className="gear-item"><img
                          src={require('./shield-icon.png')}
                          alt="armor-icon"
                          className="indiv-item-image"
                        /></div>
                </div>
                <div className="gear-item">
                  {props.items.itemList && (
                    <a
                      href={`http://www.wowhead.com/item=${
                        props.items.itemList[13].id
                      }`}
                    >
                      <img
                        src={`https://wow.zamimg.com/images/wow/icons/large/${
                          props.items.itemList[13].icon
                        }.jpg`}
                        alt="armor-icon"
                        className="indiv-item-image"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="character-stat-panel">
            <div className="stat-section">
              Item Level
              <ul className="stat-list">
                <li className="purple-text">{props.items && props.items.iLvl}</li>
              </ul>
            </div>
            <div className="stat-section">
              Attributes<ul className="stat-list">
                <li>
                  <span className="gold-text">Intellect: </span>
                  {props.stats && props.stats.int}
                </li>
                <li>
                  <span className="gold-text">Stamina: </span>
                  {props.stats && props.stats.sta}
                </li>
                <li>
                  <span className="gold-text">Armor: </span>
                  {props.stats && props.stats.armor}
                </li>
                <li>
                  <span className="gold-text">Mana Regen: </span>
                  {props.stats && props.stats.mana5}
                </li>
              </ul>
            </div>
            <div className="stat-section">
              Enchancements<ul className="stat-list">
                <li>
                  <span className="gold-text">Critical Strike: </span>
                  {props.stats && props.stats.crit.toFixed(2)}%
                </li>
                <li>
                  <span className="gold-text">Haste: </span>
                  {props.stats && props.stats.haste.toFixed(2)}%
                </li>
                <li>
                  <span className="gold-text">Mastery: </span>
                  {props.stats && props.stats.mastery.toFixed(2)}%
                </li>
                <li>
                  <span className="gold-text">Versatility: </span>
                  {props.stats &&
                    props.stats.versatilityHealingDoneBonus.toFixed(2)}%
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

// https://wow.zamimg.com/images/wow/icons/large/
