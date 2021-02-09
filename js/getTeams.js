function getData() {
  fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "85d43d1b47msh7273a9c7d1d5c94p1b0a1cjsnbc483a52d1e3",
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => getTeams(data));
}
getData();

export default function getTeams(data) {
  showTeams(data);
}

function showTeams(data) {
  const teams = data.data;
  const teamElement = document.getElementById("teams-container");

  teams.map((item) => {
    const specificTeamContainer = document.createElement("article");
    const teamContent = `
      <h1>${item.full_name}</h1>
  `;

    specificTeamContainer.innerHTML = teamContent;
    teamElement.appendChild(specificTeamContainer);
  });
}
