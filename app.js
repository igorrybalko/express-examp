const express = require('express'),
	morgan = require('morgan'),
	path = require('path')

const app = express(),
	port = 3001

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes'))
app.use('/catalog', require('./routes/catalog'))
app.use('/user', require('./routes/user'))

app.listen(port, () => {
	console.log('server started on http://localhost:' + port)
})