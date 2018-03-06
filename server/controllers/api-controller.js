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
        res.status(200).json(response.data);
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
