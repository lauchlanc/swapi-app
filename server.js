import express, {
  type $Application,
  type $Request,
  type $Response,
} from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { type About } from './src/shared/types';
import { mongoURI } from './server/config/keys';
import scores from './server/routes/api/scores';

const PORT: number = process.env.PORT != null
  ? parseInt(process.env.PORT, 10)
  : 8080;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .catch((e) => console.log(e));

const app: $Application = express();

app.use(express.static(
  path.join(__dirname, 'build'),
  { index : false }
));

app.use('/api/scores', cors(), scores);

// serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  app.get('*', (req: $Request, res: $Response) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
