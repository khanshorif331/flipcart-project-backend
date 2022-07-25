import express from 'express'
import Connection from './database/db.js'
import dotenv from 'dotenv'
import DefaultData from './default.js'
import cors from 'cors'

import router from './routes/route.js'

const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use('/', router)

dotenv.config()

const PORT = process.env.PORT || 5000

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

DefaultData()
