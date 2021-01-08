const express = require('express'),
    router = express.Router()

router.get('/', (req, res) => {

    res.render('pages/index', {title: 'Home page'})
})

router.get('/about', (req, res) => {

    res.render('pages/about', {title: 'About page', showNews: false})
})

router.post('/', (req, res, next) => {
	res.send('POST method...')
})

router.delete('/', (req, res) => {
	res.send('DELETE method...')
})

router.post('/login', (req, res) => {

	const users = [ 
		{login: 'mike', password: '12345'},
		{login: 'nicolas', password: 'qwerty'},
	]

	let user = users.find(el => {
		return req.body.login === el.login && req.body.password === el.password
	})

	if(user){
		return res.json({message: 'logined'})
	}
	res.status(400).json({message: 'incorrect login or password'});

})

module.exports = router