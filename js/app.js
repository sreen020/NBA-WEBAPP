import router from "./router/router.js";
import getData from "./utils/fetchData.js";
import fetchPlayerData from "./utils/fetchplayerData.js";
import getTeams from "./modules/getTeams.js";
import matchesInit from "./modules/showGames.js";

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
