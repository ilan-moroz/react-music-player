import { RouteNotFoundError } from '../Models/Client-Errors'
import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const err = new RouteNotFoundError(request.originalUrl)
  next(err)
}

export default ErrorHandler
