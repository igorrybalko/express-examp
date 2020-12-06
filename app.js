const express = require('express'),
	app = express(),
	port = 3000

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.listen(port, () => {
	console.log('server started on http://localhost:' + port)
})