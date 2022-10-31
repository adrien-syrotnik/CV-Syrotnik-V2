const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/**
 * List of all games
 * @returns 
 */
async function getGames(limit = 10,offset = 0){
  const data = await db.query(
    `SELECT * FROM game ORDER BY created_at DESC LIMIT ` + limit + ` OFFSET ` + offset
  );
  return {
    data
  }
}

/**
 * get game info
 * @param {*} id 
 * @returns 
 */
async function getGame(id){
  const data = await db.query(
    `SELECT * FROM game WHERE id = ` + id
  );
  return {
    data
  }
}

/**
 * Get all game categories
 * @param {*} id 
 * @returns 
 */
async function getGameCategories(id){
  const data = await db.query(
    `SELECT * FROM category WHERE game_id = ` + id
  );
  return {
    data
  }
}

/**
 * Get the id of the url name game
 * @param {*} urlName 
 * @returns 
 */
async function getGameByUrlName(urlName){
  var data = (await db.query(
    `SELECT * FROM game WHERE url_name = '` + urlName + `'`
  ));
  
  return data[0]
  
}

/**
 * Get authors game info
 * @param {*} gameId 
 * @returns 
 */
async function getGameauthors(gameId){
  const data = await db.query(
    `SELECT * FROM author INNER JOIN game_author ON author.id = game_author.author_id WHERE game_author.game_id = ` + gameId
  );
  return {
    data
  }
}


/**
 * Get game stats
 * @param {*} gameId 
 */
async function getGameStats(gameId){

    var stats = {};

    stats.nb_players = (await db.query(
      `SELECT COUNT(DISTINCT player_id) as count FROM score WHERE category_id IN (SELECT id FROM category WHERE game_id = ` + gameId + `)`
    ))[0].count;

    stats.nb_runs = (await db.query(
      `SELECT COUNT(*) as count FROM score WHERE category_id IN (SELECT id FROM category WHERE game_id = ` + gameId + `)`
    ))[0].count;

    const allTime = (await db.query(
      `SELECT score FROM score WHERE category_id IN (SELECT id FROM category WHERE game_id = ` + gameId + `)`
    )).map(score => score.score.split(':').map(score => parseInt(score)));

    const resultTime = allTime.reduce((prev, curr) => {
      
      if(curr.length == 3)
        curr.unshift(0);

      time = curr[0] * 60 * 60 * 1000 + curr[1] * 60 * 1000 + curr[2] * 1000 + curr[3];
      
      return prev + time;
    }, 0);

    stats.time_ms = resultTime;

    return stats;

}






module.exports = {
    getGames,
    getGameauthors,
    getGameByUrlName,
    getGame,
    getGameCategories,
    getGameStats
  }