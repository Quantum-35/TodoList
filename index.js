const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('This is the homepage'));

app.listen(4000, () => (
    console.log('Server running at http://localhost:4000')
));
