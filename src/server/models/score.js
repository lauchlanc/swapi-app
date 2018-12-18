import mongoose, { Schema } from 'mongoose';

// create Schema
const ScoreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    numGuesses: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false
  },
);

const Score = mongoose.model('score', ScoreSchema);

export default Score;
