function getData() {
  fetch("https://free-nba.p.rapidapi.com/games?page=0&per_page=50", {
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

function main(data) {
  console.log(data);
  showMatches(data);
}

function showMatches(data) {
  const matches = data.data;
  const container = document.getElementById("match-container");
  matches.map((item) => {
    const button = document.createElement("button");
    const text = document.createTextNode(
      item.home_team.full_name + " VS " + item.visitor_team.full_name
    );
    button.appendChild(text);
    button.setAttribute("name", item.id);
    container.appendChild(button);
  });
  getOverlay(data);
}

function getOverlay(data) {
  const overlay = document.getElementById("overlay");
  const buttons = document.querySelectorAll("button");
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", () => {
      const gameAtribute = button.getAttribute("name");
      overlay.classList.toggle("show");
      localStorage.setItem("gameId", gameAtribute);
      console.log(localStorage);
      getOverlayData(data);
    });
  });
}

function getOverlayData(data) {
  const matches = data.data;
  matches.map((match) => {
    if (match.id == localStorage.getItem("gameId")) {
      fillOverlayWithData(match);
    }
  });
}

function fillOverlayWithData(match) {
  const overlayHeading = document.getElementById("game-title");
  overlayHeading.innerText =
    match.home_team.full_name + " VS " + match.visitor_team.full_name;
}
