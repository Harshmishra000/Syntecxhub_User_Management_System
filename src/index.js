require("dotenv").config();
const express = require("express");
const linkDB = require("./db");
const routes = require("./routes/personRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('src/public'));

linkDB();

app.use("/api/user", routes);

app.get("/", (req, res) => res.send("Harsh User Service Running"));

app.listen(process.env.PORT || 5000, () =>
    console.log("Server started on", process.env.PORT)
);
