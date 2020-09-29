const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('sneakers', {
        title: 'SNEAKERS | LIST',
        isList: true
    })
})

module.exports = router;