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

loginRouter.delete('/deleteUser/;userId',async(require:Request,response:Response,next:NextFunction) => {
    console.log('delete user')
    response.status(201).json("{'msg':'user deleted'}")
});

loginRouter.put('/updateUser/;userId',async(require:Request,response:Response,next:NextFunction) => {
    console.log('update user')
    response.status(202).json("{'msg':'user updated'}")
});

export default loginRouter