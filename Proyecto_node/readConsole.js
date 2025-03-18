const readline = require('readline/promises');

async function readConsole(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        const name = await rl.question('Introduce tu nombre: ');
        const surname = await rl.question('Introduce tu apellido: ');
        const age = await rl.question('Introduce tu edad: ');

        const obj = { name, surname, age: Number(age) };
        callback(obj);
    } catch (error) {
        console.error('Error leyendo la consola:', error);
    } finally {
        rl.close();
    }
}

module.exports = { readConsole };
