// express boilerplate with js with import syntax

// dotenv config
import 'dotenv/config'

import app from './app.js'
import { connect } from './db.js'

connect()

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`)
})
