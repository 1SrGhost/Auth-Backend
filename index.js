const express = require('express');
const cors  = require('cors');
require('dotenv').config();

console.log(process.env)
// crear el servidor/ aplicacion de express
const app = express();


//Cors
app.use(cors( ));

//Lectura y parseo del body

app.use(express.json());

//Rutas 

app.use( '/api/auth', require('./routes/auth.js'));



app.listen(process.env.PORT,() => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
});