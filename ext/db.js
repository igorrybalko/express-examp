const db = require('mongoose')

db.set('useNewUrlParser', true)
db.set('useUnifiedTopology', true)
db.set('useFindAndModify', false)
db.set('useCreateIndex', true)


db.connect(process.env.DB_CONNECT + process.env.DB_NAME)
module.exports = db