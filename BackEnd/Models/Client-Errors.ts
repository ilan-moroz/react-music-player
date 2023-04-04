import { Route } from 'react-router-dom';
export class ClientError{
    public status:number
    public message:string

    public constructor(status:number, message:string){
        this.status = status
        this.message = message
    }
}

export class RouteNotFoundError extends ClientError{
    public constructor(route:string){
        super(404,`route ${route} not found`)
    }
}