const express = require('express');
const nunjucks = require('nunjucks')
const app = express();

app.get('/', (req, res) => res.render('home'));


app.use(express.static("public"));
nunjucks.configure("views", {
	autoescape: true,
	express: app,
});

app.set("view engine", "njk");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
