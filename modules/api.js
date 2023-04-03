const rapidApi = "https://basketapi1.p.rapidapi.com/api/basketball"; //BASE URL


async function getPlayersDetails(){
  let reqUrl = `${rapidApi}/player/846936`;
  let response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '5a8f9216c3mshec7f2b88007cee2p1a6878jsnffdb038eebc9',
        'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com',
      }
    }
  );
  return await response.json();
}

module.exports = {
  getPlayersDetails
}