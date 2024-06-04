import mongoose from 'mongoose'
import 'dotenv/config'

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database connected')
  } catch (error) {
    console.error('Database connection error:', error)
  }
}
