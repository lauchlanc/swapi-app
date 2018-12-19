import express, {
  type $Request,
  type $Response,
 } from 'express';
 const router = express.Router();

// Scores model
import Score from '../../models/score';

// @route GET api/scores
// @desc Gets all scores
// @access public
router.get('/', (req: $Request, res: $Response): void => {
  Score.find()
    .sort({ numGuesses: -1 })
    .then(scores => res.json(scores))
});

// @route PUT api/scores
// @desc increment score by one for current name
// @access public
router.put('/:name', (req: $Request, res: $Response): void => {
  Score.findOneAndUpdate(
    { name: req.params.name},
    { $inc: { numGuesses: 1 } },
    {
      new: true,
      upsert: true,
    },
    (err, score) => {
      if (err) {
          res.send(err);
      }
      res.json(score);
    })
});

export default router;
