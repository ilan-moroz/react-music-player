import express,{NextFunction,Request,Response} from 'express'

const loginRouter = express.Router()

loginRouter.post('/login',async(require:Request,response:Response,next:NextFunction) => {
    console.log('login user')
    response.status(200).json("{'msg':'login successful'}")
})

loginRouter.post('/register',async(require:Request,response:Response,next:NextFunction) => {
    console.log('register user')
    response.status(201).json("{'msg':'welcome new user'}")
});

export default loginRouter