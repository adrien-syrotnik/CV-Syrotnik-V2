const db = require('./db');
const helper = require('../helper');
const config = require('../config');
var fs = require('fs');


async function uploadScoreFile(file, name, scoreId) {
  if(!file)
    return


      var extensionFile = file.filename.split('.').pop();
      var oldPath = './uploads/' + file.filename;
      var newPath = './uploads/' + scoreId + "/" + name + "." + extensionFile;

      if (!fs.existsSync('./uploads/' + scoreId))
        await fs.promises.mkdir('./uploads/' + scoreId, {
          recursive: true
        });

      await fs.promises.rename(oldPath, newPath, function (err) {
        throw Error('Error while uploading file');
      })

      await db.query(
        `UPDATE score SET `+ name +` = '` + newPath + `' WHERE id = ` + scoreId
      )

}


async function addGameScore(categoryId, score, pseudo, image, video, link, desc) {

  const player_id = (await getGamePlayer(pseudo)).id;

  const data = await db.query(
    `INSERT INTO score (category_id, score, player_id, link, score.desc) VALUES (` + categoryId + `, '` + score + `', ` + player_id + `, '` + link + `', '` + desc + `')`
  );

  const id = data.insertId;

  await uploadScoreFile(image, 'image', id);
  await uploadScoreFile(video, 'video', id);

  return data;
}

async function getGamePlayer(pseudo) {

  var playerTab = await db.query(
    `SELECT * FROM player WHERE pseudo = '` + pseudo + `'`
  );

  if (playerTab.length == 0) {
    await db.query(
      `INSERT INTO player (pseudo) VALUES ('` + pseudo + `')`
    )
    return await getGamePlayer(pseudo);
  }

  return playerTab[0];
}


/**
 * Get game score
 * @param {*} gameId 
 * @param {*} category_id 
 * @returns 
 */
async function getGameScores(gameId, category_id, limit = 50, offset = 0) {
  const data = await db.query(
    `SELECT score.id,score,link,player_id,category_id,score.desc,score.created_at,score.updated_at,pseudo FROM score INNER JOIN player ON player_id = player.id WHERE category_id = ` + category_id + ` AND category_id IN (SELECT id FROM category WHERE game_id = ` + gameId + `) ORDER BY score ASC LIMIT ` + limit + ` OFFSET ` + offset
  );

  return data;
}


/**
 * Get score infos
 * @param {*} id 
 * @returns 
 */
async function getScore(id) {
  var data = await db.query(
    `SELECT score.id,score,link,image,player_id,category_id,video,category.name as category_name,score.desc,score.created_at,score.updated_at,pseudo FROM score INNER JOIN player ON player_id = player.id INNER JOIN category ON category_id = category.id WHERE score.id = ` + id
  );
  
  data[0].image = data[0].image ? true : false;
  data[0].video = data[0].video ? true : false;

  return data[0];
}

/**
 * Get score video path
 * @param {*} id 
 * @returns 
 */
async function getScoreVideoPath(id) {
  var data = await db.query(
    `SELECT video FROM score WHERE score.id = ` + id
  );
  
  return data[0].video;
}


/**
 * Get score image path
 * @param {*} id 
 * @returns 
 */
 async function getScoreImagePath(id) {
  var data = await db.query(
    `SELECT image FROM score WHERE score.id = ` + id
  );
  
  return data[0].image;
}

module.exports = {
  getGameScores,
  addGameScore,
  getScore,
  getGamePlayer,
  getScoreVideoPath,
  getScoreImagePath
}