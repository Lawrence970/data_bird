// Where the database connection is made and persists

const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const db = mongoose.connection

function connect(callback) {

	// Make connection string
	clusterUsername = process.env.CLUSTER_USERNAME
	clusterPassword = encodeURI(process.env.CLUSTER_PASSWORD)
	clusterUrl = process.env.CLUSTER_URL
	dbName = process.env.DB_NAME
	connectionOptions = "?retryWrites=true&w=majority"
	connectionString = "mongodb+srv://" + clusterUsername + ":" + clusterPassword + "@" + clusterUrl + "/" + dbName + connectionOptions

	// Connect to mongoDB
	mongoose
		.connect(connectionString, {
			useNewUrlParser:    true,
			useUnifiedTopology: true,
		})
		.catch(err => {
			console.log("There was an error connecting to mongo: ", err)
		})

}

// on this db connection, once open, run the 'callback'
// a wrapper method
function onConnect(callback) {
	db.once("open", callback)
}

// export as an object
module.exports = {
	connect: connect,
	onConnect: onConnect
}
