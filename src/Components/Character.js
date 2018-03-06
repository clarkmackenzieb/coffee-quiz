import React from "react";

const Character = props => {
  console.log(props);

  return (
    <div>
      <div>
        <img
          src={`https://render-us.worldofwarcraft.com/character/${
            props.profile.thumbnail
          }`}
          alt="amilanae-avatar"
        />
        <p>
          {props.profile.name}, Level {props.profile.level}
        </p>
        <p>iLvL {props.items.iLvl}</p>
      </div>
      <div>
        <h3>Gear</h3>
        {props.items &&
          props.items.itemList.map((item, i) => {
            return (
              <div key={i}>
                <img
                  src={`https://wow.zamimg.com/images/wow/icons/large/${
                    item.icon
                  }.jpg`}
                  alt="armor-icon"
                />
                <p>
                  {item.name}, iLvl {item.itemLevel}
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
