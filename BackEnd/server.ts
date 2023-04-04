import cors from 'cors'
import express,{NextFunction,Request,Response} from 'express'
import fileUpload from 'express-fileUpload'
import config from './Utils/Config'
import { request } from 'http'




const router = express.Router()

router.post('/addVideo',async(request:Request,response:Response,next:NextFunction)=>{
    const body = request.body
    console.log(body)
})


