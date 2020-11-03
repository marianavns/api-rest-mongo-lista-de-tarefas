const clients = require('../models/clients')

const getAll = (req, res) => {
  clients.find((err, clients) => {
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(clients)
  })
}

const getCompradores = (req, res) => {
    console.log("getCompradores");
      res.status(200).send("ok");
};

const getByCpf = (req, res) => {
    console.log("getByCpf");
      res.status(200).send("ok");
};

const postClient = (req, res) => {
  let client = new clients(req.body)
  client.save((err) => {
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(client.toJSON())
  })
}


module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postClient
}