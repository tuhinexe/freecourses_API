// Requiring the modules

const express = require("express");
const app = express();
const courseApi = require(__dirname + "/endpoint");

app.get("/", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
  res.send(data);
});

app.get("/courses", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({courses : {course1: data.results[0],course2: data.results[1],course3: data.results[2], course4: data.results[3], course5: data.results[4], course6: data.results[5], course7: data.results[6], course8: data.results[7], course9: data.results[8], course10: data.results[9]}});
});

app.get("/courses/course1", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course1: data.results[0]});
});

app.get("/courses/course2", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course2: data.results[1]});
});

app.get("/courses/course3", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course3: data.results[2]});
});

app.get("/courses/course4", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course4: data.results[3]});
});

app.get("/courses/course5", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course5: data.results[4]});
});

app.get("/courses/course6", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course6: data.results[5]});
});

app.get("/courses/course7", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course7: data.results[6]});
});

app.get("/courses/course8", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course8: data.results[7]});
});

app.get("/courses/course9", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course9: data.results[8]});
});

app.get("/courses/course10", async (req, res) => {
	  const data = await courseApi.fetchDailyCources();
	  res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested, Content-Type, Accept Authorization"
	)
	    res.json({course10: data.results[9]});
});

// Definig the port to listen on
let port = process.env.PORT;
if (port == null || port == ""){
  port = 3000;
}

app.listen(port, () => {
  console.log("listening on port " + port);
});