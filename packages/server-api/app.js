import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'

import authRoutes from './routes/auth.routes.js'
import taksRoutes from './routes/tasks.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api', authRoutes)

app.use('/api/auth', authRoutes)
app.use('/api', taksRoutes)

// si NODE_ENV es production use.static para servir el cliente
// si no, no lo hagas y solo sirve la API
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../web-client/dist'))
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

export default app
