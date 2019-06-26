const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('dist'));
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Production app listening on port ${port}!`);
});
