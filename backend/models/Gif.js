const mongoose = require("../db/connection");

const GifSchema = new mongoose.Schema({
	name: { type: String, required: true },
	url: { type: String, required: true }
});

const Gif = mongoose.model("Gif", GifSchema);

module.exports = Gif;
