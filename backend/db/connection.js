const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/gif", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

module.exports = mongoose;
