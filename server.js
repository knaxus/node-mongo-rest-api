const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.listen(port, () => {
  console.log('app is running on port', port);
})