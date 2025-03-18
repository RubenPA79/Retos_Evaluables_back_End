const fs = require('fs/promises');

async function writeAndRead(path, obj) {
    try {
        await fs.writeFile(path, JSON.stringify(obj, null, 2), 'utf-8');
        console.log('Archivo escrito correctamente.');

        const data = await fs.readFile(path, 'utf-8');
        console.log('Contenido del archivo:', JSON.parse(data));
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = { writeAndRead };
