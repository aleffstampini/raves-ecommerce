const express = require('express');
const path = require('path')
const app = express();

const home = '../src/app/index';

app.use(express.static(__dirname + '/src'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render(home));

app.get('/female', (req, res) => console.log('female!'));
app.get('/male', (req, res) => console.log('male!'));
app.get('/accessories', (req, res) => console.log('accessories!'));

app.listen(3000, () => console.log('[init] server is running...'));