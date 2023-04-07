import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import fileUpload from 'express-fileupload'
import config from '../Utils/Config'
import { request } from 'http'
import VideoLogicMYSQL from '../Logic/VideoLogicMYSQL'

const router = express.Router()

router.post(
  'addVideo',
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body
    console.log(body)
    response.status(201).json("{'msg':'video uploaded'}")
  },
)

router.delete(
  'deleVideo/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    const videoId = +request.params.id
    if (videoId === null || videoId < 1) {
      response.status(404).json("{'msg':'Video not found'}")
    }
    console.log('deleting....')
    response.status(204)
  },
)

router.get(
  'videoList',
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json("{'msg':'Video'}")
  },
)

router.post(
  'newCat',
  async (request: Request, response: Response, next: NextFunction) => {
    const catName = request.body.params.catName
    console.log(catName)
    // response.status(200).json(VideoLogicMYSQL.addCategory(catName))
  },
)

export default router
