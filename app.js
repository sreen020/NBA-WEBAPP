function getData() {
  // "https://free-nba.p.rapidapi.com/games?page=0&team_ids=1%2C2%2C3&per_page=25",
  fetch("https://free-nba.p.rapidapi.com/games?team_ids=2&per_page=25", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "85d43d1b47msh7273a9c7d1d5c94p1b0a1cjsnbc483a52d1e3",
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => main(data));
}

getData();
/**
 *
 * @param {object} data
 */
function main(data) {
  showMatches(data);
}

/**
 *
 * @param {object} data
 */
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
  getOverlay(data);
}

/**
 *
 * @param {object} data
 */
function getOverlay(data) {
  const overlay = document.getElementById("overlay");
  const buttons = document.querySelectorAll(".matchButton");
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", () => {
      const gameAtribute = button.getAttribute("name");
      overlay.classList.toggle("show");
      localStorage.setItem("gameId", gameAtribute);
      getOverlayData(data);
      removeOverlay();
    });
  });
}

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
function fillOverlayWithData(match) {
  const homeTitle = document.getElementById("home-title");
  const visitorTitle = document.getElementById("visitor-title");

  const homeScore = document.getElementById("home-score");
  const visitorScore = document.getElementById("visitor-score");

  const matchSeason = document.getElementById("match-season");

  getReadableDate(match);

  homeTitle.innerText = match.home_team.full_name;
  visitorTitle.innerText = match.visitor_team.full_name;

  homeScore.innerText = match.home_team_score;
  visitorScore.innerText = match.visitor_team_score;

  matchSeason.innerText = "Season: " + match.season;
}

function getReadableDate(match) {
  const matchDate = document.getElementById("match-date");

  const year = match.date.slice(0, 4);
  const month = match.date.slice(5, 7);
  const day = match.date.slice(8, 10);
  const fullDate = day + "-" + month + "-" + year;
  matchDate.innerText = fullDate;
}
