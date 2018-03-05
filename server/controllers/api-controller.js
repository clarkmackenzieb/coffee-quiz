const axios = require("axios");
const { apiKey } = require("../config.js");
const baseUrl = `https://us.api.battle.net/wow/character/Whisperwind/Amilanae?locale=en_US&apikey=${apiKey}`;

module.exports = {
  getAll: (req, res) => {
    let dataResponse = {
      profile: {},
      items: {},
      stats: {},
      realm: {},
      progression: {}
    };

    axios
      .get(`${baseUrl}`)
      .then(response => {
        dataResponse.profile = response.data;
      })
      .catch(console.log());
    axios
      .get(`${baseUrl}&fields=progression`)
      .then(response => {
        dataResponse.progression = response.data;
      })
      .catch(console.log());
    axios
      .get(`${baseUrl}&fields=items`)
      .then(response => {
        dataResponse.items = response.data;
      })
      .catch(console.log());
    axios
      .get(`${baseUrl}&fields=stats`)
      .then(response => {
        dataResponse.stats = response.data;
      })
      .catch(console.log());
    axios
      .get(
        `https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=${apiKey}&realms=whisperwind`
      )
      .then(response => {
        dataResponse.realm = response.data;
      })
      .catch(console.log());

    res.status(200).json(dataResponse);
  }
};
