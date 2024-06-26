import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import taksRoutes from './routes/tasks.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api', taksRoutes)

// Configura Express para servir archivos estáticos desde la carpeta de la build
if (process.env.NODE_ENV === 'production') {
  const path = await import('path')
  app.use(express.static('../web-client/dist'))

  app.get('*', (req, res) => {
    console.log(path.resolve('../web-client', 'dist', 'index.html'))
    res.sendFile(path.resolve('../web-client', 'dist', 'index.html'))
  })
}

export default app
