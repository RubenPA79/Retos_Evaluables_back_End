// Importamos las dependencias necesarias
const express = require('express');
const cors = require('cors');

// Importamos las rutas
const bookRoutes = require('./routes/bookRoutes');

// Inicializamos la aplicación Express
const app = express();

// Configuramos los middleware
app.use(express.json()); // Para parsear JSON en las peticiones
app.use(express.urlencoded({ extended: true })); // Para parsear datos de formularios

// Configuramos CORS según lo solicitado en el enunciado
// Insertamos las líneas de código requeridas
let cors_options = require('cors');
app.use(cors_options());

// Configuramos las rutas
app.use('/', bookRoutes);

// Ruta para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.status(200).send('API de libros funcionando correctamente');
});

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Exportamos la aplicación
module.exports = app;