const fs = require('fs/promises');
const readline = require('readline/promises');

async function reto3() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        const name = await rl.question('Introduce tu nombre: ');
        const surname = await rl.question('Introduce tu apellido: ');
        const age = await rl.question('Introduce tu edad: ');

        const obj = { name, surname, age: Number(age) };
        const filePath = './reto3.json';

        // Guardar en archivo
        await fs.writeFile(filePath, JSON.stringify(obj, null, 2), 'utf-8');
        console.log('Datos guardados en JSON.');

        // Leer el archivo
        const data = await fs.readFile(filePath, 'utf-8');
        console.log('Contenido del archivo:', JSON.parse(data));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
}

// Ejecutar la función
reto3();
