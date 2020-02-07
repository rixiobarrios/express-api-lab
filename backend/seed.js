const Gif = require("./models/Gif");

Gif.deleteMany({}).then(() => {
	Gif.deleteMany({}).then(() => {
		console.log("deleted all Gifs");
		Gif.create({
			name: "1",
			url: "https://media.giphy.com/media/3o6ozBUuLfzTCngAFi/giphy.gif"
		}).then(() => {
			Gif.create({
				name: "2",
				url:
					"https://media0.giphy.com/media/H281Ikg1tBpBu/giphy.gif?cid=ecf05e473d3d97f6953f403c33a315b3620b1c24c8f597aa&rid=giphy.gif"
			})
				.then(() => {
					Gif.create({
						name: "3",
						url:
							"https://media2.giphy.com/media/H7kfFDvD9HSYGRbvid/giphy.gif?cid=ecf05e473d3d97f6953f403c33a315b3620b1c24c8f597aa&rid=giphy.gif"
					});
				})
				.then(() => {
					Gif.create({
						name: "4",
						url: "https://media1.giphy.com/media/LkTVAmk8ytrWGn6WcI/giphy.gif"
					});
					console.log("Seeded new Gifs");
				});
		});
	});
});
