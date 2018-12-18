import express, {
  type $Application,
  type $Request,
  type $Response,
} from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { type About } from 'shared/types';
import { mongoURI } from './config/keys';
import scores from './routes/api/scores';

const PORT: number = process.env.PORT != null
  ? parseInt(process.env.PORT, 10)
  : 5000;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Mongo Connected'))
  .catch((e) => console.log(e));

const app: $Application = express();

app.use(express.static(
  path.join(__dirname, '..', '..', 'build'),
  { index : false }
));

app.get('/api/about', (req: $Request, res: $Response): void => {
  const about: About = {
    about: 'This is a sample app that uses the Star Wars API (SWAPI), with React to play a simple guessing game!',
  };

  res.json(about);
})

app.use('/api/scores', cors(), scores);

app.get('*', (req: $Request, res: $Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
