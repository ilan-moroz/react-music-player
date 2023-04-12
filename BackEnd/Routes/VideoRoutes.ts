import express, { NextFunction, Request, Response } from 'express'
import VideoLogic from '../Logic/VideoLogicMYSQL'

const router = express.Router()

// Add song
router.post(
  '/addSong',
  async (request: Request, response: Response, next: NextFunction) => {
    const newSong = request.body
    console.log(newSong)
    response.status(201).json(await VideoLogic.addSong(newSong))
  },
)

// Get song id
router.get(
  '/songId/:song',
  async (request: Request, response: Response, next: NextFunction) => {
    const song = request.params.song
    response.status(202).json(await VideoLogic.getSongId(song))
  },
)

// router.put(
//   '/update',
//   async (request: Request, response: Response, next: NextFunction) => {
//     response.status(202).json(await VideoLogic.updateSong(request.body))
//   },
// )

// get all songs
router.get(
  '/allSongs',
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(202).json(await VideoLogic.getAllSongs())
  },
)

//get song by id
// router.get(
//   '/getSong/:id',
//   async (request: Request, response: Response, next: NextFunction) => {
//     response.status(200).json(await VideoLogic.getSongById(+request.params.id))
//   },
// )

//delete song by id
router.delete(
  '/delete/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id
    VideoLogic.deleteSong(id)
    response.status(204).json()
  },
)

//delete category by id
// router.delete(
//   '/deleteCat/:id',
//   async (request: Request, response: Response, next: NextFunction) => {
//     const id = +request.params.id
//     VideoLogic.deleteCategory(id)
//     response.status(204).json()
//   },
// )

//add category
// router.get(
//   '/newCat/:catName',
//   async (request: Request, response: Response, next: NextFunction) => {
//     response
//       .status(201)
//       .json(await VideoLogic.addCategory(request.params.catName))
//   },
// )

// get all categories
// router.get(
//   '/allCat',
//   async (request: Request, response: Response, next: NextFunction) => {
//     response.status(200).json(await VideoLogic.getAllCategories())
//   },
// )

// TEST
router.get(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json('Controller working !!!')
  },
)

export default router
