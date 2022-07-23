import express from 'express'
import Connection from './database/db.js'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
