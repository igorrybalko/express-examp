const express = require('express'),
	router = express.Router()

const conf = require('../config'),
	User = require('../models/User'),
	{ userValidation } = require('../validations/user')

router.route('/').get( async (req, res, next) => {

	let content = []

	try {
		content = await User.find({})
	} catch (err) {
		return next(err)
	}

	res.render('pages/users', {
		title: 'Users',
		siteName: conf.siteName,
		content
	})
})

router.route('/:id').get(async (req, res, next) => {

	const id = req.params.id

	let content = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		_id: id
	}

	if(req.params.id !== 'create'){

		try {
	
			content = await User.findById(id).exec()

			// let userUpper = await content.getNameInUpperCase()
			// console.log(userUpper)
			
		} catch (err) {
			return next(err)
		}
	}

	res.render('pages/user', {
		title: 'Users',
		siteName: conf.siteName,
		content
	})
}).post((req, res, next) => {

	const {error} = userValidation(req.body)
	if (error) return next({type: 'JOI', error})

	let user = new User(req.body)

	user.save((err, result) => {
		if(err){
			return next(err)
		}
		res.redirect('/user')
	})
	
}).put((req, res) => {

	const {error} = userValidation(req.body)

	if (error){
		return res.status(400).json({message: error.details[0].message})
	} 

	User.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, (err, result) => {
		if(err){
			return res.status(400).json({message: 'error'})
		}
		res.json({message: 'updated'})
	})
	
}).delete((req, res) => {

	User.findByIdAndRemove(req.params.id, (err, result) => {
		if(err){
			return res.status(400).json({message: 'error'})
		}
		res.json({message: 'deleted'})
	})
})

module.exports = router