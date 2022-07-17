const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;


app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});