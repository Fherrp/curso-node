const {respone} = require('express');

const usuarioGet = (req,res = respone) => {
const {q, email, password} = req.query;

    res.json({
        msg: 'get API - controler',
        q,
        email,
        password
    });

}
const usuarioPut = (req,res = respone) => {
    const {email} = req.params.email;
    res.json({
        msg: 'put API - controler',
        email
    });

}

const usuarioPost = (req,res = respone) => {
    const {email, password} = req.body;
    res.json({
        msg: 'post API - controler',
        email, password
    });

}

const usuarioPatch = (req,res = respone) => {
    res.json({
        msg: 'patch API - controler'
    });

}

const usuarioDelete = (req,res = respone) => {
    res.json({
        msg: 'Delete API - controler'
    });

}

module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioPatch,
    usuarioDelete
}