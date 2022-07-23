// const express = require('express')
// const Connection = require('./database/db')
import express from 'express'
import Connection from './database/db.js'

const app = express()

const PORT = process.env.PORT || 5000

Connection()

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

// user
// FUwAeq2mz6hGn31c
