export default function renderPlayerData(filteredPlayers) {
  removeRender();
  renderPlayers(filteredPlayers);
}

function removeRender(filteredPlayers) {
  const removeableItems = document.querySelectorAll(".playerContainer");

  if (removeableItems.length > 0) {
    for (let i = 0; i < removeableItems.length; i++) {
      const element = removeableItems[i];
      element.parentNode.removeChild(element);
    }
  }
}

function renderPlayers(filteredPlayers) {
  filteredPlayers.forEach((element) => {
    const teamTitle = document.getElementById("team-title");
    teamTitle.innerText = element.team.full_name;

    const playerContainer = document.createElement("div");
    playerContainer.classList.add("playerContainer");
    const specificTeamSection = document.getElementById(
      "specific-team-section"
    );
    const playerHTML = `
      <p>${element.first_name} ${element.last_name}</p>
      <p>${element.position}</p>
    `;

    playerContainer.innerHTML = playerHTML;
    specificTeamSection.appendChild(playerContainer);
  });
}
