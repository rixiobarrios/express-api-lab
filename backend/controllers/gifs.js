const express = require("express");
const Gif = require("../models/Gif");

const router = express.Router();

//return one gif
router.get("/:id", (req, res) => {});

//return all gifs
router.get("/", (req, res) => {});

//update one gif and reditect to /
router.put("/:id", (req, res) => {});

//add one gif and redirect to /
router.post("/", (req, res) => {});

//delete one gif and redirect to /
router.delete("/:id", (req, res) => {});

module.exports = router;
