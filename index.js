const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

app.use(morgan('dev'));

// config CORS
app.use(cors());


// lectura y parseo del body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// base de datos
dbConnection();



// rutas
app.use('/api/post', require('./routes/post'));




app.listen(3000, () => {
    console.log('servidor corriendo en el puerto ' + 3000);
});