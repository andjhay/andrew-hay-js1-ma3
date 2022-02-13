// key dc91efd8ac4c40789bf18e6e5ac0b487

// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=dc91efd8ac4c40789bf18e6e5ac0b487";

var htmlHere = document.querySelector(".gameResults");

async function getGames() {
  // fetch
  const response = await fetch(url);
  const results = await response.json();
  const games = results.results;

  htmlHere.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    if (i === 8) {
      break;
    }

    htmlHere.innerHTML += `<div class="aGame"> <h3> ${games[i].name} </h3> Rating - ${games[i].rating} <br> Tags - ${games[i].tags.length} </div>`;
  }
}

getGames();
