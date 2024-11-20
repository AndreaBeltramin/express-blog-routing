const express = require("express");
const app = express();
const port = 3000;

//configuro gli asset statici sull'applicazione in modo che si possano visualizzare le immagini associate ad ogni post
app.use(express.static("public"));

//creo il progetto base con una rotta / che ritorna un testo
app.get("/", (req, res) => {
	res.send("<h1>Server del mio blog</h1>");
});

//creo un array dove inserisco una lista di almeno 5 post, per ognuno indico titolo,
//contenuto, immagine e tags sotto forma di array di stringhe
const blogPosts = [
	{
		title: "ciambellone",
		content: "ciambellone fatto in casa",
		img: "./images/ciambellone.jpeg",
		tags: ["cucina", "dolce", "dessert"],
	},
	{
		title: "cracker di barbabietola",
		content: "cracker di barbabietola fatti in casa",
		img: "./images/cracker_barbabietola.jpeg",
		tags: ["cucina", "antipasto"],
	},
	{
		title: "pane dolce fritto",
		content: "pane dolce fritto fatto in casa",
		img: "./images/pane_fritto_dolce.jpeg",
		tags: ["cucina", "panificazione", "dolce"],
	},
	{
		title: "pasta alla barbabietola",
		content: "pasta alla barbabietola fatta in casa",
		img: "./images/pasta_barbabietola.jpeg",
		tags: ["cucina", "pasta", "primo"],
	},
	{
		title: "torta paesana",
		content: "torta paesana fatta in casa",
		img: "./images/torta_paesana.jpeg",
		tags: ["cucina", "dolce", "dessert"],
	},
];

//creo una rotta /bacheca che restituisce un oggetto json con la lista dei post e il conteggio partendo da un array
app.get("/bacheca", (req, res) => {
	res.json([blogPosts, "il numero di post è: " + blogPosts.length]);
});

app.listen(port, () => {
	console.log("example app listening on port " + port);
});
