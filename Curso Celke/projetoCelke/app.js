const express = require('express');
const mongoose = require('mongoose');

require('./models/Usuarios');
const Usuarios = mongoose.model('usuarios');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/everton', {
    useNewUrlParser: true,
     useUnifiedTopology: true
    }).then(() =>{
        console.log("conexao realizada com sucesso");
    }).catch((erro)=>{
        console.log("erro na conexao"+erro);
    });


//visualizar todos usuarios

app.get("/usuarios", (req, res) => {
    Usuarios.find({}).then((usuarios) => {
        return res.json(usuarios);
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum usuário encontrado!"
        });
    });
});


//visualizar unico usuarios pelo id

app.get("/usuarios/:id", (req, res) => {
    Usuarios.findOne({ _id: req.params.id }).then((usuario) => {
        return res.json(usuario);
        
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum usuário encontrado!"
        });
    });
});

//cadastrar usuarios

app.post("/usuarios", (req, res) => {
    Usuarios.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Usuário não cadastrado com sucesso!"
        })

        return res.json({
            error: false,
            message: "Usuário cadastrado com sucesso!"
        })
    });
});

//editar usuario

app.put("/usuarios/:id", (req, res) => {
    Usuarios.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Usuario não editado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Usuário editado com sucesso!"
        });
    });
});

//deletar usuario

app.delete("/usuarios/:id", (req, res) => {
    Usuarios.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Usuário não apagado!"
        });

        return res.json({
            error: false,
            message: "Usuário apagado com sucesso!"
        });
    });
});



app.listen(8080, () =>{
    console.log("servidor iniciado com sucesso porta 8080");
});

