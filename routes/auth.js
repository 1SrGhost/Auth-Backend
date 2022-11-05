const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();


// Crear un nuevo usuario
router.post('/new', crearUsuario);

//Login de usuario
router.post('/',[
    check('email','el email es obligatorio').isEmail(), check('password','la contrasena es obligatoria').isLength({min:6})
], loginUsuario);
//Validar token
router.get('/renew', revalidarToken);















module.exports = router;