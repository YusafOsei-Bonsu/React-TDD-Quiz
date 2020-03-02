const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "build")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));