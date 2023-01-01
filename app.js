const express = require('express');
const app = express();

const home = '../public/pages';

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render(home));

app.listen(3000, () => console.log('[init] server is running...'));