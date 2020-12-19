const express = require('express'),
    router = express.Router()

router.get('/:id/section/:part', (req, res) => {
	let info = 'catalog: ' + req.params.id + ' ' + 'part: ' + req.params.part;
	res.send(info)
})

module.exports = router