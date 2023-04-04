import { fileUpload } from 'express-fileupload';
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser';

//create server
const server = express()

// handle cors
server.use(cors())

// how we send the data back
server.use(express.json())

// where to save the files
server.use(express.static('user_videos'))

// enable file uploading and create a path for the files if it doesn't exist
server.use(fileUpload({createParentPath: true}))

// parse the body as JSON
server.use(bodyParser.json()) 

// how to use the routes
