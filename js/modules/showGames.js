export default function matchesInit(data) {
  showMatches(data);
  getOverlay(data);
  removeOverlay();

  /**
   *
   * @param {object} data
   */
  // this function will open a modal and will store the selected team in the localstorage
  function getOverlay(data) {
    const overlay = document.getElementById("overlay");
    const buttons = document.querySelectorAll(".matchButton");
    Array.prototype.forEach.call(buttons, (button) => {
      button.addEventListener("click", () => {
        const gameAtribute = button.getAttribute("name");
        overlay.classList.toggle("show");
        localStorage.setItem("gameId", gameAtribute);
        getOverlayData(data);
      });
    });
  }

  /**
   *
   * @param {object} data
   */
  // this function will create the content of the modal
  function showMatches(data) {
    const container = document.getElementById("match-container");
    const matches = data.data;
    matches.map((item) => {
      const button = document.createElement("div");
      button.classList.add("matchButton");

      const buttonContent = `
      <h2>VS</h2>
      <div class="teamContainer">
        <p>${item.home_team.full_name}</p>
        <p>${item.visitor_team.full_name}</p>
      </div>
    `;
      button.innerHTML = buttonContent;
      button.setAttribute("name", item.id);

      container.appendChild(button);
    });
  }

  /**
   *
   */
  // the modal removes after clicking on the screen or on the close button
  function removeOverlay() {
    const overlay = document.getElementById("overlay");
    const closeOverlayButton = document.getElementById("close-overlay-btn");

    overlay.addEventListener("click", () => {
      overlay.classList.remove("show");
    });
    closeOverlayButton.addEventListener("click", () => {
      overlay.classList.remove("show");
    });
  }

  /**
   *
   * @param {object} data
   */
  // this previously stored data get compared with the teams and the spicific team data will be showed
  function getOverlayData(data) {
    const matches = data.data;
    matches.map((match) => {
      if (match.id == localStorage.getItem("gameId")) {
        fillOverlayWithData(match);
      }
    });
  }

  /**
   *
   * @param {object} data
   */
  // after finding the right data, the modal now gets filled with this data
  function fillOverlayWithData(match) {
    const homeTitle = document.getElementById("home-title");
    const visitorTitle = document.getElementById("visitor-title");
    const homeScore = document.getElementById("home-score");
    const visitorScore = document.getElementById("visitor-score");
    const matchSeason = document.getElementById("match-season");

    homeTitle.innerText = match.home_team.full_name;
    visitorTitle.innerText = match.visitor_team.full_name;

    homeScore.innerText = match.home_team_score;
    visitorScore.innerText = match.visitor_team_score;

    matchSeason.innerText = "Season: " + match.season;

    getReadableDate(match);
  }

  /**
   *
   * @param {string} match
   */
  // instead of a timestamp this function will show a readable data: DD-MM-YYYY
  function getReadableDate(match) {
    const matchDate = document.getElementById("match-date");

    const year = match.date.slice(0, 4);
    const month = match.date.slice(5, 7);
    const day = match.date.slice(8, 10);
    const fullDate = day + "-" + month + "-" + year;
    matchDate.innerText = fullDate;
  }
}
