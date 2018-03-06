const axios = require("axios");
const { apiKey } = require("../config.js");
const baseUrl = `https://us.api.battle.net/wow/character/Whisperwind/Amilanae?locale=en_US&apikey=${apiKey}`;

module.exports = {
  getProfile: (req, res) => {
    axios
      .get(`${baseUrl}`)
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(console.log());
  },
  getProgression: (req, res) => {
    axios
      .get(`${baseUrl}&fields=progression`)
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(console.log());
  },
  getStats: (req, res) => {
    axios
      .get(`${baseUrl}&fields=stats`)
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(console.log());
  },
  getRealmStatus: (req, res) => {
    axios
      .get(
        `https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=${apiKey}&realms=whisperwind`
      )
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(console.log());
  },
  getItems: (req, res) => {
    axios
      .get(`${baseUrl}&fields=items`)
      .then(response => {
        let iLvl = response.data.items.averageItemLevelEquipped;
        let itemList = [
          response.data.items.back,
          response.data.items.chest,
          response.data.items.feet,
          response.data.items.finger1,
          response.data.items.finger2,
          response.data.items.hands,
          response.data.items.head,
          response.data.items.legs,
          response.data.items.mainHand,
          response.data.items.neck,
          response.data.items.shirt,
          response.data.items.tabard,
          response.data.items.trinket1,
          response.data.items.trinket2,
          response.data.items.waist,
          response.data.items.wrist,
          response.data.items.shoulder
        ];
        res.status(200).json({
          iLvl: response.data.items.averageItemLevelEquipped,
          itemList
        });
      })
      .catch(console.log());
  },
  getFeed: (req, res) => {
    axios
      .get(`${baseUrl}&fields=feed`)
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(console.log());
  }
};
