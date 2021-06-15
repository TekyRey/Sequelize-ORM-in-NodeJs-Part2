
const router = require('express').Router();

const dotenv = require('dotenv')
dotenv.config();

const db =require('../models')

//get all routes
router.get('/get', (req, res) =>{
    db.tuto.findAll()
    .then(tuto => res.json(tuto))
    .catch(err =>console.error(err.message))
})

//get one item
router.get('/get/:id', (req, res) =>{
    let {id} =req.params;

    db.tuto.findAll({
        where: {id}
    }).then(tuto => res.json(tuto))
    .catch(err =>console.error(err.message))
})

//add tutorial
router.post('/add', (req, res) => {
    let{name, text} =req.body
    db.tuto.create({
       name,
       text,
    }).then(tuto => res.json(tuto))
    .catch(err => console.error(err.message))
});

//update
router.put('/update/:id', (req, res) => {
    let {id} =req.params;
    let {name, text} =req.body;
    

    db.tuto.update({name, text}, {where: {id}
    }).then(tuto => res.json(tuto))
    .catch(err => console.error(err.message))
})

module.exports= router;