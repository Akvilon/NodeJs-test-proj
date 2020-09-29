const {Router} = require('express');
const Sneaker = require('../models/sneaker')

const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'SNEAKERS | ADD',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const sneaker = new Sneaker(req.body.brand, req.body.model, req.body.img, req.body.price)
    await sneaker.save()

    res.redirect('/sneakers')
})

module.exports = router;


