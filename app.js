const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
	response.send(`Welcome to our very plain site.`);
});

app.get(`/about`, (request, response) => {
	response.send(`It was a cold dark rainy day in PizzaVille.`);
});

app.listen(4000, () => console.log(`Listening on port 4000`));


