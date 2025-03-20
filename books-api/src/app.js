const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json()); // Middleware para leer JSON en req.body
app.use(cors());

app.use('/api/books', bookRoutes); // Asignamos las rutas

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
