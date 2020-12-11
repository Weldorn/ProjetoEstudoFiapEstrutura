const mongoose = require("mongoose")

const bcrypt = require("bcrypt")

const tabela = new mongoose.Schema({
    nome:{type:String, require:true},
    email:{type:String,require:true},
    cpf:{type:String, require:true},
    telefone:String,
    idade: {type:Number, min: 16, max: 120},
    usuario:{type:String, unique:true},
    senha: String,
    datacadastro: {type: Date, default:Date.now}
})

tabela.pre("save",function(next){
    let cliente = this
    if(!cliente.isModified('senha')) return next()
    bcrypt.hash(cliente.senha,10, (err,encr)=>{
        cliente.senha = encr
        return next()
    })
})

module.exports = mongoose.model("tbcliente",tabela)