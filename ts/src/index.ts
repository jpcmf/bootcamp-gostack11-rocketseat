import express from 'express';

import hellowW from './routes';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hellow' });
});

app.listen(3333);
