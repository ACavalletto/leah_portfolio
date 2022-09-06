const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/pricing', (req, res) => {
    res.render('pricing.ejs')
});

app.get('/gallery', (req, res) => {
    res.render('gallery.ejs')
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});