const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', bookRoutes);

// ✅ Ruta de prueba para verificar el servidor
app.get('/test', (req, res) => {
    res.send("✅ Servidor funcionando correctamente");
});

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Libros 📚. Usa /api/books para ver los libros.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
