const {Router} = require('express');
const Sneaker = require('../models/sneaker');
const router = Router();

router.get('/', async (req, res) => {
    const sneakers = await Sneaker.getAllData()
    res.render('sneakers', {
        title: 'SNEAKERS | LIST',
        isList: true,
        sneakers
    })
})

router.get('/:id', async (req, res) => {
    try {
        const sneaker = await Sneaker.getById(req.params.id)
        res.render('sneaker', {
            sneaker
        })
    } catch (e) {
        throw e
    }
})

module.exports = router;