import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { validate_connection } from './config/sequelize.config.js'

const app = express()
app.use(express.json(), cors())
dotenv.config()
const PORT = process.env.PORT
validate_connection()

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))