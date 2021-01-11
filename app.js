require('dotenv').config()

const express = require('express'),
	morgan = require('morgan'),
	path = require('path')

const app = express(),
	port = process.env.PORT || 3001

app.engine('ejs', require('ejs-mate'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan(process.env.LOG_LEVEL))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes'))
app.use('/catalog', require('./routes/catalog'))
app.use('/user', require('./routes/user'))

app.listen(port, () => {
	console.log('server started on http://' + process.env.DOMAIN + ':' + port)
})