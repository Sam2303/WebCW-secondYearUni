const express = require('express');
const app = express();

app.use('/CSSandJS', express.static('src/CSSandJS'))
app.use('/', express.static('src/html'))

  app.listen(8080);
  console.log('Website is running on 127.0.01:8080');
