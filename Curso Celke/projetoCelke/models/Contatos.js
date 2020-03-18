const mongoose = require('mongoose');

const Contatos = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
});

mongoose.model('contatos', Contatos);