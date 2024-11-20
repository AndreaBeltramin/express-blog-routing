const express = require("express");
const app = express();
const port = 3000;

// configuro gli asset statici sull'applicazione in modo che si possano
// visualizzare le immagini associate ad ogni post
app.use(express.static("public"));

const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

// creo il progetto base con una rotta / che ritorna un testo
app.get("/", (req, res) => {
	res.send("<h1>Server del mio blog</h1>");
});

app.listen(port, () => {
	console.log("example app listening on port " + port);
});
