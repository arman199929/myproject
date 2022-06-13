const express = require('express');
const pay = require('payment');
const path = require('path')
const eL = require('express-ejs-layouts')
const app = express();

const backRouter = require('./routes/homeRoute.js');


app.use(express.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs')
app.use(eL)

app.use('/', backRouter);
app.listen(5000, () => {
    console.log('🚀Server has started...')
})