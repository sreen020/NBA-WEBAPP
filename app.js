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
    const button = document.createElement("div");
    const VSTextEl = document.createElement("h2");
    const homeP = document.createElement("p");
    const visitorP = document.createElement("p");
    const homeText = document.createTextNode(item.home_team.full_name);
    const visitorsText = document.createTextNode(item.visitor_team.full_name);
    const VSText = document.createTextNode("VS");
    const teamContainer = document.createElement("div");
    teamContainer.classList.add("teamContainer");
    button.classList.add("matchButton");

    // H2 element will be placed in the button
    button.appendChild(VSTextEl);
    // This H2 gets the right tekst in it
    VSTextEl.appendChild(VSText);

    homeP.appendChild(homeText);
    visitorP.appendChild(visitorsText);

    // Div element will be placed in the button and will recieve a home and visitors tekst
    button.appendChild(teamContainer);
    teamContainer.appendChild(homeP);
    teamContainer.appendChild(visitorP);

    // This button will be placed in its container
    button.setAttribute("name", item.id);
    container.appendChild(button);
  });
  getOverlay(data);
}

function getOverlay(data) {
  const overlay = document.getElementById("overlay");
  const buttons = document.querySelectorAll(".matchButton");
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
  const homeTitle = document.getElementById("home-title");
  const visitorTitle = document.getElementById("visitor-title");

  const homeScore = document.getElementById("home-score");
  const visitorScore = document.getElementById("visitor-score");

  homeTitle.innerText = match.home_team.full_name;
  visitorTitle.innerText = match.visitor_team.full_name;

  homeScore.innerText = match.home_team_score;
  visitorScore.innerText = match.visitor_team_score;
}
