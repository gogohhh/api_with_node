const controllers = {}

controllers.test = (req, res) => {
    const data = {
        nombre: 'Diego',
        apellido: 'Perez',
        edad: '24',
        ciudad: 'Ixtapaluca'
    }

    console.log("Ejecucion de pruebaController test");
    res.json(data);
}

module.exports = controllers;