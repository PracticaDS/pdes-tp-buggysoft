const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Production app listening on port 8080!');
});
