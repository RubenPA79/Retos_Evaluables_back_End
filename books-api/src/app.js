const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./error/errorHandling');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/books', bookRoutes);

// Rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Middleware de errores
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
