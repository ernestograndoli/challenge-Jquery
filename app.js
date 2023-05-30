const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const apiRouter = require('./routes/api.router')
const viewsRouter = require('./routes/views.router')

const app = express();

app.use(express.static('public'))
app.use(expressLayouts)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('layout', 'layout')
app.set('view engine', 'ejs')

app.use('/api', apiRouter);
app.use('', viewsRouter)

module.exports = app;