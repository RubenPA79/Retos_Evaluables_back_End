const fs = require('fs/promises');

async function reto2() {
    const obj = {
        name: "Juan",
        surname: "Pérez",
        age: 30
    };

    const filePath = './reto2.json';

    try {
        // Escribir el archivo
        await fs.writeFile(filePath, JSON.stringify(obj, null, 2), 'utf-8');
        console.log('Archivo guardado correctamente.');

        // Leer el archivo
        const data = await fs.readFile(filePath, 'utf-8');
        console.log('Contenido del archivo:', JSON.parse(data));
    } catch (error) {
        console.error('Error:', error);
    }
}

// Ejecutar la función
reto2();
