const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const compression = require('compression');
app.use(compression());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allows-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

