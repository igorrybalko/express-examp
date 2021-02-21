const express = require('express'),
	router = express.Router()

const conf = require('../config'),
	User = require('../models/user')

router.route('/').get( async (req, res) => {

	let content = []

	try {
		content = await User.find({})
	} catch (err) {
		throw err
	}

	res.render('pages/users', {
		title: 'Users',
		siteName: conf.siteName,
		content
	})
})

router.route('/:id').get(async (req, res) => {

	const id = req.params.id

	let content = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		_id: id
	}

	if(id !== 'create'){

		try {
	
			content = await User.findById(id).exec()

			// let nameUpper = await content.getNameInUpperCase()
			// console.log(nameUpper)
			
		} catch (err) {
			throw err
		}
	}

	
	res.render('pages/user', {
		title: 'Users',
		siteName: conf.siteName,
		content
	})
}).post((req, res, next) => {

	let user = new User(req.body)

	user.save((err) => {
		if(err){
			return next(err)
		}
		res.redirect('/user')
	})
	
}).put((req, res) => {

	User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }, (err, result) => {
		if(err){
			return res.status(400).json({message: 'error data'})
		}
		res.json({message: 'updated'})
	})
	
}).delete((req, res) => {

	User.findByIdAndRemove(req.params.id, (err, result) => {
			if(err){
				return res.status(400).json({message: 'error data'})
			}
			res.json({message: 'deleted'})
	})
})

module.exports = router