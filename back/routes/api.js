const express = require('express');
const router = express.Router();
const gameScoreRouter = require('./game_score');
const scoreRouter = require('./score');
const scoreService = require('../services/score');

const db = require('../services/db');

router.use("/game", gameScoreRouter);
router.use("/score", scoreRouter);

router.get("/player/:id", async (req, res) => {
  const data = await db.query(
    `SELECT * FROM player WHERE id = ${req.params.id}`
  );
  res.json({data : data[0]});
})

router.get("/player-pseudo/:pseudo", async (req, res) => {
  try {
    res.json(await scoreService.getGamePlayer(req.params.pseudo));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
})

router.get("/category/:id", async (req, res) => {
  const data = await db.query(
    `SELECT * FROM category WHERE id = ${req.params.id}`
  );
  res.json({data : data[0]});
})


router.get("/pdf-to-note", async (req, res) => {
 
  
  
})



module.exports = router;