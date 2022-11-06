const { response } = require('express');
const Usuario = require('../models/Usuario');




const crearUsuario = async (req, res = response) => {



    const { email, name, password } = req.body;

    try { 
    
    //Verificar el email
    let usuario = await Usuario.findOne({email:email});
    //Validar que el usuario no este creado
    if ( usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'El usuario con ese email ya existe'
        });
    }
    //Crear Usuario con el modelo
    const dbUser = new Usuario(req.body);
    //Hash de la contrasena 

    //Generar el JWT
    //Crear Usuario de DB
    await dbUser.save();
    //Generar respuesta exitosa
    return res.status(201).json({
        ok: true,
        uid: dbUser.id,
        name,
    })
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'por favor hable con el administrador'
        })

    }




}

const loginUsuario = (req, res = response) => {


    const { email, password } = req.body;
    console.log(email, password)
    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    })
}

const revalidarToken = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'renew'
    })
}
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}