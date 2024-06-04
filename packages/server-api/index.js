import 'dotenv/config'
import app from './app.js'
import { connect } from './db.js'

async function main () {
  try {
    await connect()
    app.listen(process.env.PORT)
    console.log(`Listening on port http://localhost:${process.env.PORT}`)
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error)
  }
}

main()
