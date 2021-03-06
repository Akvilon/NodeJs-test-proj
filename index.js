const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const sneakersRoutes = require('./routes/sneakers');
const addRoutes = require('./routes/add');

const app = express();

//----- hbs connection
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'pages');
//-----

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//----- Routs
app.use('/', homeRoutes)
app.use('/sneakers', sneakersRoutes)
app.use('/add', addRoutes)
//-----

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})