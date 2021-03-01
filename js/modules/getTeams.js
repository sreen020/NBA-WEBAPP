import getData from "../utils/fetchData.js";

getData(getTeams, "https://free-nba.p.rapidapi.com/teams?page=0");

/**
 *
 * @param {object} data
 */
export default function getTeams(data) {
  const teams = data.data;
  const teamElement = document.getElementById("teams-container");

  // there will be a element created for each team and filled with a H1
  teams.map((item) => {
    const specificTeamContainer = document.createElement("a");
    const teamContent = `
      <h1>${item.full_name}</h1>
  `;

    // A href attribute is assigned to this for routing #
    specificTeamContainer.setAttribute("href", "#teams/" + item.abbreviation);

    // created element will be placed in its container
    specificTeamContainer.innerHTML = teamContent;
    teamElement.appendChild(specificTeamContainer);
  });
}
