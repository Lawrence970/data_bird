const express = require('express')
const port = process.env.PORT || 8080
const app = express()

var server = app.listen(port, () => {
	console.log(`HTTP server running on http://localhost:${port}`)
})
