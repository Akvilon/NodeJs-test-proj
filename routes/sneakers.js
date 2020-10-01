const {Router} = require('express');
const Sneaker = require('../models/sneaker');
const router = Router();

router.get('/', async (req, res) => {
    const sneakers = await Sneaker.getAllData()
    console.log(sneakers)
    res.render('sneakers', {
        title: 'SNEAKERS | LIST',
        isList: true,
        sneakers
    })
})

module.exports = router;