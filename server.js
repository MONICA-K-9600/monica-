const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/talent-center'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/talent-center/' }),
);
app.listen(process.env.PORT || 8080);