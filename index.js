const express = require('express');

// crear el servidor/ aplicacion de express
const app = express();

//Rutas 

app.use( '/api/auth', require('./routes/auth.js'));



app.listen(4000,() => {
    console.log(`servidor corriendo en puerto ${4000}`);
});