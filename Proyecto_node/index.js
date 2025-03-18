const { writeAndRead } = require('./writeAndReadObject');
const { readConsole } = require('./readConsole');

async function main() {
    const filePath = './reto4.json';

    console.log('--- Ejecución de readConsole ---');
    await readConsole(async (obj) => {
        console.log('Objeto recibido:', obj);

        console.log('--- Escribiendo y leyendo el archivo ---');
        await writeAndRead(filePath, obj);
    });
}

main();
