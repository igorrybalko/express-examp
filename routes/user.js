const express = require('express'),
    router = express.Router()

router.route('/').get((req, res) => {
	res.send('get user...')
}).post((req, res) => {
	res.send('create user...')
}).put((req, res) => {
	res.send('update user...')
}).delete((req, res) => {
	res.send('delete user...')
})

module.exports = router