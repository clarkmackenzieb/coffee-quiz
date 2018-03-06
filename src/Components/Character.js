import React from "react";

import "./styles.css";

const Character = props => {
  console.log(props);

  return (
    <div>
      <div className="character-container">
        <img
          src={`https://render-us.worldofwarcraft.com/character/${
            props.profile.thumbnail
          }`}
          alt="amilanae-avatar"
          className="character-avatar"
        />
        <div className="character-info">
          <p>
            {props.profile.name}, Level {props.profile.level}
          </p>
          <p>Item Level: {props.items.iLvl}</p>
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default Character;

// https://wow.zamimg.com/images/wow/icons/large/
