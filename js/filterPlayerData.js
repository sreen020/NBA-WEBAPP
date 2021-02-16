/**
 *
 * @param {object} playerData
 * @param {string} id
 */
export default function filterPlayers(playerData, id) {
  let filtered = filterData(playerData, id);

  return filtered;
}

/**
 *
 * @param {object} playerData
 * @param {string} id
 */
function filterData(playerData, id) {
  return playerData.filter((player) => {
    if (player.team.abbreviation == id) {
      return true;
    }
  });
}
