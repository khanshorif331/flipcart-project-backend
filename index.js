import express from 'express'
import Connection from './database/db.js'
import dotenv from 'dotenv'
import DefaultData from './default.js'
import cors from 'cors'
import bodyParser from 'body-parser'

import router from './routes/route.js'

const app = express()

// middleware
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())

app.use('/', router)

dotenv.config()

const PORT = process.env.PORT || 5000

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const URL =
	process.env.MONGODB_URI ||
	`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nznvb.mongodb.net/?retryWrites=true&w=majority`

Connection(URL)

// // in heroku NODE_ENV is set to production
// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'))
// }

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

DefaultData()
