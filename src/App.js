//import express
const express = require('express');
const app = express();

//port setting
app.set('port', process.env.PORT || 4000);

//middleware
app.use(express.json());

//import router
const pruebaRoutes = require('./Routes/pruebaRoute');
//Route
app.use('/prueba', pruebaRoutes);

app.use('/test', (req,res) => {
    res.send('ruta de test');
});

app.use('/', (req, res) => {
    res.send('Hola desde puerto 4000');
} );

app.listen(app.get('port'), () => {
    console.log('Server iniciado en puerto 4000');
});