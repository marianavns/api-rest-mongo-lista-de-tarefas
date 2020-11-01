const mongoose = require('mongoose')

const colaboradorasSchema = new mongoose.Schema(
    {
        nome : { type : String},
        idade: { type: Number },
    },
    {
        versionKey: false
    });

const colaboradoras = mongoose.model('colaboradoras', colaboradorasSchema)

module.exports = colaboradoras