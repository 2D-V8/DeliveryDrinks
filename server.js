const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");

/*

* IMPORTAR RUTAS
*/

const usersRoutes =require("./routes/UserRoutes");




const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0'; // Listen on all interfaces by default

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Added extended: true for more parsing options

app.use(cors());

app.disable("x-powered-by");

app.set("port", port);


/*

* LLAMANDO RUTAS
*/

usersRoutes(app);



server.listen(port, host, function() {
    console.log(`application de NodeJS (PID: ${process.pid}) listening on ${host}:${port} Iniciada...`);
});

app.get("/", (req, res) => {
    res.send("Ruta raiz del back end");
});
app.get("/test", (req, res) => {
    res.send("Ruta test");
});

// Example route (you can add more routes here)
app.get("/api/data", (req, res) => {
    const data = { message: "Hello from the backend!", timestamp: new Date() };
    res.json(data);
});

// ERROR MANAGE
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the full error stack for debugging
    res.status(err.status || 500).send({ error: err.message || 'Internal Server Error' }); // Send a JSON error response
});

module.exports = app; // Export the app for testing or other uses