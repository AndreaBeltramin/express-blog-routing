const express = require("express");
const router = express.Router();
const blogPosts = require("../db/blogPosts.js");

// rotta index
// restituisce un oggetto json con la lista dei post
// e il conteggio partendo da un array
router.get("/", (req, res) => {
	res.json([blogPosts, "il numero di post è: " + blogPosts.length]);
});

// rotta show
router.get("/:id", (req, res) => {
	const id = req.params.id;
	res.json(`Mostra il post con id n. ${id}`);
});

// rotta store
router.post("/", (req, res) => {
	res.json("Crea un nuovo post");
});

// rotta update
router.put("/:id", (req, res) => {
	const id = req.params.id;
	res.json(`Modifica totale del post con id n. ${id}`);
});

// rotta modify
router.patch("/:id", (req, res) => {
	const id = req.params.id;
	res.json(`Modifca parziale del post con id n. ${id}`);
});

// rotta destroy
router.delete("/:id", (req, res) => {
	const id = req.params.id;
	res.json(`Elimina il post con id n. ${id}`);
});

module.exports = router;
