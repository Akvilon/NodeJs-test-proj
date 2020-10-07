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

router.get('/:id/edit', async (req, res) => {
    if(!req.query.allow) {
        return res.redirect('/')
    }

    const sneaker = await Sneaker.getById(req.params.id)

    res.render('sneaker-edit', {
        title: `Edit ${sneaker.model}`,
        sneaker
    })
})

router.post('/edit', async (req, res) => {
    console.log('req.body',req.body)
    await Sneaker.update(req.body)
    res.redirect('/sneakers')
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