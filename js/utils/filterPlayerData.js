/**
 *
 * @param {object} playerData
 * @param {string} id
 */
// Only the players from the chosen team will be displayed
export default function filterPlayers(playerData, id) {
  let filtered = filterData(playerData, id);
  return filtered;
}

/**
 *
 * @param {object} playerData
 * @param {string} id
 */
// The players will be filtered with using the team abbreviation
function filterData(playerData, id) {
  return playerData.filter((player) => {
    if (player.team.abbreviation == id) {
      return true;
    }
  });
}
