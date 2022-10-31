const express = require('express');
const router = express.Router();
const gameService = require('../services/game');
const gameScoreService = require('../services/score');
var multer = require('multer');

var fs = require('fs');


//Get the image of a score
router.get('/:id/image', async function (req, res, next) {

    try {

        const path = await gameScoreService.getScoreImagePath(req.params.id);

        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                res.status(404).json({ message: 'Image not found' });
                return
            }

            //path exists
            //res.download(path); // Set disposition and send it.
            fs.readFile(path, function (err, data) {
                if (err) throw err; // Fail if the file can't be read.
                else {
                    //res.writeHead(200, {'Content-Type': 'image/jpeg'});
                    res.end(data); // Send the file data to the browser.
                }
            });
        })

    } catch (err) {
        console.error(`Error while getting image `, err.message);
        next(err);
    }

});



//Get the video of a score
router.get('/:id/video', async function (req, res, next) {

    try {
        const path = await gameScoreService.getScoreVideoPath(req.params.id);

        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                res.status(404).json({ message: 'Video not found' });
                return
            }

            //path exists
            res.download(path); // Set disposition and send it.
        })
    }
    catch (err) {
        console.error(`Error while getting video `, err.message);
        next(err);
    }

});

/**
 * get score infos
 */
router.get('/:id', async function (req, res, next) {

    try {
        res.json({ data: await gameScoreService.getScore(req.params.id) });
    } catch (err) {
        console.error(`Error while getting score `, err.message);
        next(err);
    }

})




module.exports = router;