import express from "express";
import newIconsList from "./getIconAndGenerateJson.mjs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send(JSON.parse(JSON.stringify(newIconsList)));
  }, 5000);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
