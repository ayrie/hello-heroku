const express = require('express');
const cats = require('../models/cats')

const router = express.Router();

router.get('/', async (req, res, next) => {
    // try {
        res.status(200).send('Hello there, Heroku');
    // } 
    // catch (err) {
    //     res.status(500).send(err.message);
    // }
});

router.get('/cats', async (req, res, next) => {
    try {
        res.status(200).send(cats);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/cats/:id', async (req, res, next) => {
    try {
        let cat;
        
        cats.forEach(item => {
            
            if (item.id === req.params.id) {
                cat = item;
            }
        });

        if (!cat) {
            res.status(404).send('Cat not found');
        }

        res.status(200).send(cat);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/cats/add', async (req, res, next) => {
    try {
        const newCat = req.body;
        cats.push(newCat);
        console.log(cats);
        
        res.status(201).send(newCat);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

module.exports = router;