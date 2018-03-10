const axios = require("axios");
const { apiKey } = require("../config.js");
const baseUrl = `https://us.api.battle.net/wow/character/Whisperwind/Amilanae?locale=en_US&apikey=${apiKey}`;

module.exports = {
  getAll: (req, res) => {
    axios
      .all([
        axios.get(`${baseUrl}`),
        axios.get(`${baseUrl}&fields=progression`),
        axios.get(`${baseUrl}&fields=stats`),
        axios.get(`${baseUrl}&fields=items`),
        axios.get(`${baseUrl}&fields=feed`),
        axios.get(
          `https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=${apiKey}&realms=whisperwind`
        )
      ])
      .then(response => {
        let tempArr = [...response];
        tempArr = tempArr.map(x => {
          return x.data;
        });
        res.status(200).json(tempArr);
      })
      .catch(console.log);
  },
  getItem: (req, res) => {
    axios.get(`https://us.api.battle.net/wow/item/${req.params.id}?locale=en_US&apikey=${apiKey}`).then(response => {
      res.status(200).json(response.data)
    }).catch(console.log)
  }
};
