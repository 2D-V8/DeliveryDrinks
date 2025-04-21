const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/*
Importamos Rutas
*/
const userRoutes = require('./routes/userRoutes');


const port = process.env.PORT || 3000;

// función que se ejecuta antes de la petición 
app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

// Puerto
app.set('port', port);

/*
Llamado Rutas
*/
userRoutes(app);


// Iniciar servidor
server.listen(port, '192.168.18.172', () => {
  console.log(`Aplicación de NodeJs iniciada en el puerto ${port}`);
});

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Ruta Raiz BackEnd');
});

// Ruta test
app.get('/test', (req, res) => {
    res.send('Ruta test');
  });

// Manejo de errores
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});
