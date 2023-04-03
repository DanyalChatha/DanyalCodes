//import required modules
const express = require("express");
const path = require("path");

const rapidApi = require("./modules/api");

//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

//Connect to pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//page routes
app.get("/", (request, response) => {
  response.render("index", { title: "Home" });
});

app.get("/Teams", (request, response) => {
  response.render("Teams", { title: "Teams" });
});

app.get("/Players", async (request, response) => {
  let playerDetail = await rapidApi.getPlayersDetails();
  response.render("players", { title: "Players" , players: playerDetail});
});

//Connect to Public folder
app.use(express.static(path.join(__dirname, "public")));

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});