import loader from "./loader.js";

/**
 *
 */
export default async function fetchPlayerData() {
  let allData = [];
  let morePagesAvailable = true;
  let currentPage = 0;
  let totalPages = 15; // change this for more players note: app performance will be adjustd

  loader("show");

  // this while loop makes a API call for each APIpage and will be returned
  while (morePagesAvailable) {
    currentPage++;
    const response = await fetch(
      `https://free-nba.p.rapidapi.com/players?page=${currentPage}?per_page=100`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "85d43d1b47msh7273a9c7d1d5c94p1b0a1cjsnbc483a52d1e3",
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
        },
      }
    );
    let data = await response.json();
    data.data.forEach((e) => allData.unshift(e));
    morePagesAvailable = currentPage < totalPages;
  }
  loader("hide");
  return allData;
}
