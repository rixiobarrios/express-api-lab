const express = require("express");
const Gif = require("../models/Gif");

const router = express.Router();

//return all gifs
router.get("/", (req, res) => {
	Gif.find({}).then(gifs => {
		res.json(gifs);
	});
});

//update one gif
router.put("/:id", (req, res) => {
	console.log(req.body);
	Gif.findByIdAndUpdate(req.params.id, req.body).then(() => {
		Gif.find({}).then(gifs => {
			res.json(gifs);
		});
	});
});

//add one gif
router.post("/", (req, res) => {
	Gif.create(req.body).then(() => {
		Gif.find({}).then(gifs => {
			res.json(gifs);
		});
	});
});

//delete one gif
router.delete("/:id", (req, res) => {
	Gif.findOneAndRemove({ _id: req.params.id }).then(() => {
		Gif.find({}).then(gifs => {
			res.json(gifs);
		});
	});
});

module.exports = router;
