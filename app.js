const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    res.send("<h1>Hello there!!</h1>");
});

app.listen(3000);