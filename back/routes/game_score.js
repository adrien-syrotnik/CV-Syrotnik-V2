const express = require('express');
const router = express.Router();
const gameService = require('../services/game');
const gameScoreService = require('../services/score');
var multer = require('multer');

var fs = require('fs');

var pseudo;

var storage = multer.diskStorage(
  {
    destination: './uploads/',
    filename: function (req, file, cb) {
      //req.body is empty...
      //How could I get the new_file_name property sent from client here?
      cb(null, (pseudo ? pseudo + "/" : "") + file.originalname);
    }
  }
);

var upload = multer({ storage: storage });



/* GET games */
router.get('/', async function (req, res, next) {
  try {
    res.json(await gameService.getGames(req.query.limit, req.query.offset));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


router.get('/:url_name', async function (req, res, next) {
  try {
    let data = await gameService.getGameByUrlName(req.params.url_name);

      data.authors = (await gameService.getGameauthors(data.id)).data;
      //data.stats = (await gameService.getGameStats(data.id));

      res.json({ data: data });

  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});



router.get('/:id/scores/:category_id', async function (req, res, next) {
  try {
    res.json({ data: await gameScoreService.getGameScores(req.params.id, req.params.category_id, req.query.limit, req.query.offset) });
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

//get game categories
router.get('/:id/categories', async function (req, res, next) {
  try {
    res.json(await gameService.getGameCategories(req.params.id));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});



router.post('/:id/scores', async function (req, res, next) {

  //Upload first to get the body infos
  upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }])(req, res, async (err) => {

    if (err)
      res.status(500).json({ message: 'Error while uploading file' });

    const data = req.body;
    const files = req.files;
    const pseudo = data.pseudo;
    const category_id = data.category_id;
    const link = data.link;
    const desc = data.desc;
    const score = data.score;

    //Get files
    const image = files.image ? files.image[0] : undefined;
    const video = files.video ? files.video[0] : undefined;

    try {
      //Check if all the fields needed are filled
      if (category_id && score && pseudo && (image || video || link)) {
        const scoreId = (await gameScoreService.addGameScore(category_id, score, pseudo, image, video, link ?? null, desc ?? null)).insertId;
        res.json({ message: "ok" })
      }
      else {
        //delete files because not available
        await Promise.all([image ? image.filename : undefined, video ? video.filename : undefined].map(async (path) => {
          if (path)
            fs.unlink(path, async function (err) {
              //error message
            });
          return path
        }))
        res.status(400).json({ message: 'Missing fields' });
      }
    } catch (err) {
      next(err);
    }



  });

});

//get game stats
router.get('/:id/stats', async function (req, res, next) {

  try {
    const stats = await gameService.getGameStats(req.params.id);
    res.json({ data: stats });
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }

});






module.exports = router;