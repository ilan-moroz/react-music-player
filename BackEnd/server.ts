import fileUpload from 'express-fileupload'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import router from './Routes/VideoRoutes'
import loginRouter from './Routes/LoginRoutes'
import config from './Utils/Config'

//create server
const server = express()

// handle cors
server.use(cors())

// how we send the data back
server.use(express.json())

// where to save the files
server.use(express.static('user_videos'))

// enable file uploading and create a path for the files if it doesn't exist
server.use(fileUpload({ createParentPath: true }))

// parse the body as JSON
server.use(bodyParser.json())

// how to use the routes
server.use('api/v1/videos/', router)
server.use('api/v1/users/', loginRouter)

// handle error(route not exist)

// start the server
server.listen(config.webPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.webPort}`)
})
