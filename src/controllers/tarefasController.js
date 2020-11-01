const tarefas = require('../models/tarefas');
const colaboradoras = require('../models/colaboradoras');


const getAll = (req, res) => {
  console.log(req.url);
  tarefas.find(function(err, tarefas){
    res.status(200).send(tarefas);
  })

};

const getById = (req, res) => {
  const id = req.params.id;
  tarefas.find({ id }, function(err, tarefas){
  res.status(200).send(tarefas);
})
}

const postTarefa = (req, res) => {
  console.log(req.body);
  res.status(200).send("ok");

};

const deleteTarefa = (req, res) => {
  res.status(200).send("ok");

};

const deleteTarefaConcluida = (req, res) => {
  res.status(200).send("ok");
}

const putTarefa = (req, res) => {
  res.status(200).send("ok");
}

module.exports = {
  getAll,
  getById,
  postTarefa,
  deleteTarefa,
  deleteTarefaConcluida,
  putTarefa
};
