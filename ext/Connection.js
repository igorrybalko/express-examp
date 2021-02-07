const { MongoClient } = require('mongodb')

class Connection {

    static async connectToMongo() {
        if (this.db) return this.db
        const client = await MongoClient.connect(this.url, this.options)
        this.db = client.db(process.env.DB_NAME)
        return this.db
    }
}

Connection.db = null
Connection.url = process.env.DB_CONNECT
Connection.options = {
    useNewUrlParser:    true,
    useUnifiedTopology: true
}

module.exports = { Connection }