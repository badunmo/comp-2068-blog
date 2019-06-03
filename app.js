require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
	auth: {
		user:process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD
	},
	useNewUrlParser: true
}).catch(err => console.log(`ERROR: ${err}`));

const express = require(`express`);

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


const routes = require('./routes.js');
app.use('/', routes);

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascripts'));
app.use('/images', express.static('assets/images'));

app.get(`/`, (request, response) => {
	response.send(`Welcome to our very plain site.`);
});

app.get(`/about`, (request, response) => {
	response.send(`It was a cold dark rainy day in PizzaVille.`);
});

app.listen(4000, () => console.log(`Listening on port 4000`));


