// express boilerplate with js with import syntax

// dotenv config
import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('../web-client/dist'))

app.get('/', (req, res) => {
  res.send('Hello World!')
}
)

app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT)
}
)
