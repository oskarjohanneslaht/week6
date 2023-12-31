const express = require('express');
const port = 3000;

const countriesRouter = require('./routes/countries');
const booksRouter = require('./routes/books');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {    
    res.render('index');
});

app.use('/countries', countriesRouter);
app.use('/books', booksRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});