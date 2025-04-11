// Importamos la aplicación configurada
const app = require('./app');

// Definimos el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor API REST ejecutándose en http://localhost:${PORT}`);
    console.log('Endpoints disponibles:');
    console.log(`- GET /books/:id - Obtener un libro por ID`);
    console.log(`- GET /books - Obtener todos los libros`);
    console.log(`- POST /books - Añadir un nuevo libro`);
    console.log(`- PUT /books/:id - Modificar un libro existente`);
    console.log(`- DELETE /books/:id - Eliminar un libro`);
});