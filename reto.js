const fs = require('fs');  // Importa el módulo de archivos
const readline = require('readline');  // Importa el módulo para leer la consola
const path = 'data.json';  // Nombre del archivo JSON donde se guardará la información

// Crear interfaz para entrada de usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Eliminar archivo JSON si existe (para evitar acumulación de datos)
if (fs.existsSync(path)) {
    fs.unlinkSync(path);
}

// Preguntar al usuario por los datos
rl.question('Ingrese su nombre: ', (name) => {
    rl.question('Ingrese su apellido: ', (surname) => {
        rl.question('Ingrese su edad: ', (age) => {
            const user = { name, surname, age }; // Crear objeto con los datos ingresados

            // Guardar el objeto en un archivo JSON
            fs.writeFile(path, JSON.stringify(user, null, 2), (err) => {
                if (err) {
                    console.error('Error al escribir el archivo:', err);
                } else {
                    console.log('Datos guardados en', path);

                    // Leer el archivo JSON e imprimir su contenido en consola
                    fs.readFile(path, 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error al leer el archivo:', err);
                        } else {
                            console.log('Contenido del JSON:', JSON.parse(data));
                        }
                        rl.close(); // Cierra la interfaz de lectura
                    });
                }
            });
        });
    });
});

