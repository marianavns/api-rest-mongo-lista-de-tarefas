const mongoose = require('mongoose');

const clientsSchema = new mongoose.Schema(
    {
        email : { type : String},
        cpf: { type: Number },
        dataNascimento: { type: String },
        estadoCivil: { type: String },
        nomeColaboradora: { type: String },
        telefone: { type: Number },
        comprou: { type: Boolean },
    },
    {
        versionKey: false
    }
)

// Definindo a collection que será criada
const clientsCollection = mongoose.model('clients', clientsSchema);

// exportar o model para ser utilizado
module.exports = clientsCollection