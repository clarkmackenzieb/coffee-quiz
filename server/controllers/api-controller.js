const axios = require("axios");
const { apiKey } = require("../config.js");

module.exports = {
  getAll: (req, res) => {

    let baseUrl = `https://us.api.battle.net/wow/character/wyrmrest%20accord/drascar?locale=en_US&apikey=${apiKey}`;
    axios
      .all([
        axios.get(`${baseUrl}`),
        axios.get(`${baseUrl}&fields=progression`),
        axios.get(`${baseUrl}&fields=stats`),
        axios.get(`${baseUrl}&fields=items`),
        axios.get(`${baseUrl}&fields=feed`),
        axios.get(
          `https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=${apiKey}&realms=whisperwind`
        ),
        axios.get(`${baseUrl}&fields=talents`)
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
  getCharacter: (req, res) => {
    console.log(req.query)
    let baseUrl = `https://us.api.battle.net/wow/character/${req.query.realm}/${req.query.name}?locale=en_US&apikey=${apiKey}`;

    axios
      .all([
        axios.get(`${baseUrl}`),
        axios.get(`${baseUrl}&fields=progression`),
        axios.get(`${baseUrl}&fields=stats`),
        axios.get(`${baseUrl}&fields=items`),
        axios.get(`${baseUrl}&fields=feed`),
        axios.get(
          `https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=${apiKey}&realms=${req.query.realm}`
        ),
        axios.get(`${baseUrl}&fields=talents`)
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
