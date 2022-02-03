const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use('/', router);

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});