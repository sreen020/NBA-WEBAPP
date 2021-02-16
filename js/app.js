import router from "./router.js";
import getData from "./fetchData.js";
import fetchPlayerData from "./fetchplayerData.js";
import getTeams from "./getTeams.js";
import matchesInit from "./showGames.js";

// empty array will be filled with the players
let playerData = [];

/**
 *
 */
// data gets fetched from API
async function init() {
  playerData = await fetchPlayerData();
  getData(main, "https://free-nba.p.rapidapi.com/games?team_ids=2&per_page=25");
}

init();

/**
 *
 * @param {object} data
 */
function main(data) {
  router(playerData);
  matchesInit(data);
}
