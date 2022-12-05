const fetch = require("node-fetch");
const UDEMY_API_ENDPOINT =
  "https://www.real.discount/api-web/all-courses/?store=&page=1&per_page=10&orderby=undefined&free=1&search=&language=&cat=&subcat=&editorschoices=";

module.exports = {fetchDailyCources : async () => {
  console.log(`Fetching daily coding challenge from GFG api.`);

  const init = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  const response = await fetch(UDEMY_API_ENDPOINT, init);

  return response.json();
},
};
