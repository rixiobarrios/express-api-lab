const express = require("express");

const app = express();

const gifController = require("./controllers/gifs");

const cors = require("cors");

//implement middleware
app.use(express.json()); //parse requests
app.use(express.urlencoded({ extended: true })); //allow nested object requests
app.use(cors()); //allow multi-origin requests

// app.use(methodOverride("_method"));
app.use("/gifs", gifController);

app.listen(3000, () => console.log("Listening on port 3000"));
