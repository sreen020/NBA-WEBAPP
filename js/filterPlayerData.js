export default function filterPlayers(playerData, id) {
  let filtered = filterData(playerData, id);
  console.log(playerData);

  return filtered;
}

function filterData(playerData, id) {
  return playerData.filter((player) => {
    if (player.team.abbreviation == id) {
      return true;
    }
  });
}
