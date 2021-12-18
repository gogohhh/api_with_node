const express = require('express');
const router = express.Router();

const pruebaController = require('../controllers/pruebaController');

router.get('/test', pruebaController.test);

router.get('/save', (req, res) => {
    res.json({status: "Guardado"});
});

module.exports = router;
