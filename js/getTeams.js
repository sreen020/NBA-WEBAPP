import getData from "./fetchData.js";

getData(getTeams, "https://free-nba.p.rapidapi.com/teams?page=0");

export default function getTeams(data) {
  showTeams(data);
}

function showTeams(data) {
  const teams = data.data;
  const teamElement = document.getElementById("teams-container");

  teams.map((item) => {
    const specificTeamContainer = document.createElement("a");
    const teamContent = `
      <h1>${item.full_name}</h1>
  `;

    specificTeamContainer.setAttribute("href", "#teams/" + item.abbreviation);

    specificTeamContainer.innerHTML = teamContent;
    teamElement.appendChild(specificTeamContainer);
  });
}
