const mongoose = require("../db/connection");

const GifSchema = new mongoose.Schema({
	url: { type: String, required: true }
});

const Gif = mongoose.model("Answer", GifSchema);

module.exports = Gif;
