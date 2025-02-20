import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.resolve('./dist')));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(3000, () => {
  console.log('Server started');
});
