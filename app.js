const express = require('express'),
	app = express(),
	port = 3000

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.get('/catalog/:id/section/:part', (req, res) => {
	let info = 'catalog: ' + req.params.id + ' ' + 'part: ' + req.params.part;
	res.send(info)
})
 
app.post('/', (req, res) => {
	res.send('POST method...')
})

app.delete('/', (req, res) => {
	res.send('DELETE method...')
})

app.route('/user').get((req, res) => {
	res.send('get user...')
}).post((req, res) => {
	res.send('create user...')
}).put((req, res) => {
	res.send('update user...')
}).delete((req, res) => {
	res.send('delete user...')
})

app.listen(port, () => {
	console.log('server started on http://localhost:' + port)
})