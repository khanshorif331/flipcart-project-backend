import express from 'express'
import Connection from './database/db.js'

const app = express()

const PORT = process.env.PORT || 5000

Connection()

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
