import express, {
  type $Application,
  type $Request,
  type $Response,
} from 'express';
import path from 'path';

import { type Message, type About } from 'shared/types';


const PORT: number = process.env.PORT != null
  ? parseInt(process.env.PORT, 10)
  : 5000;

const app: $Application = express();

app.get('/api/message', (req: $Request, res: $Response): void => {
  const message: Message = {
    message: 'Bookend up!',
  };

  res.json(message);
})

app.get('/api/about', (req: $Request, res: $Response): void => {
  const about: About = {
    about: 'This is a sample app that uses the Star Wars API (SWAPI), with React to play a simple guessing game!',
  };

  res.json(about);
})

app.use(express.static(
  path.join(__dirname, '..', '..', 'build'),
  { index : false }
));

app.get('*', (req: $Request, res: $Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
