import { OkPacket } from 'mysql'
// import Category from '../../src/model/Cat'
import dal_mysql from '../Utils/dal_mysql'
import Song from '../Models/Song'

const addSong = async (newSong: Song) => {
  const SQLcommand = `
  INSERT INTO youtube.songs 
  (url, songName, songImg, category, videoFile) 
  VALUES 
  ('${newSong.url}', '${newSong.songName}',
  '${newSong.songImg}', '${newSong.category}','');`
  const result: OkPacket = await dal_mysql.execute(SQLcommand)
  return result.insertId
}

// const updateSong = async (song: Song) => {
//   const SQLcommand = `
//     UPDATE youtube.songs
//     SET url = '${song.url}', songName = '${song.songName}',
//     songImg = '${song.songImg}', category = ${song.category},
//     videoFile = '${song.videoFile}'
//     WHERE (id = ${song.id});`
//   return await dal_mysql.execute(SQLcommand)
// }

const deleteSong = (id: number) => {
  const SQLcommand = `DELETE FROM youtube.songs WHERE id=${id}`
  return dal_mysql.execute(SQLcommand)
}

// const getSongById = async (id: number) => {
//   return await dal_mysql.execute(`SELECT * FROM youtube.songs WHERE id =${id}`)
// }
const getAllSongs = async () => {
  const SQLcommand = `SELECT * FROM youtube.songs`
  return await dal_mysql.execute(SQLcommand)
}

const createSongsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS youtube.songs
    (id INT NOT NULL AUTO_INCREMENT,
    url VARCHAR(45) NOT NULL,
    songName VARCHAR(45) NOT NULL,
    songImg VARCHAR(300) NOT NULL,
    category VARCHAR(45) NOT NULL,
    videoFile VARCHAR(45) NOT NULL,
    PRIMARY KEY(id));`
  return dal_mysql.execute(SQLcommand)
}

const createCategoriesTable = () => {
  const SQLcommand = `
    CREATE TABLE IF NOT EXISTS youtube.category
    (id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX name_UNIQUE (name ASC) VISIBLE);`
  return dal_mysql.execute(SQLcommand)
}

// //categories
// const addCategory = async (newCategory: string) => {
//   //SQL command for adding new category
//   const SQLcommand = `INSERT INTO youtube.category (name) VALUES ('${newCategory}');`
//   console.log('sql>', SQLcommand)
//   const response: OkPacket = await dal_mysql.execute(SQLcommand)
//   const categoryId = response.insertId
//   console.log('New Id', categoryId, ' Message:', response.message)
//   return categoryId
// }

// const deleteCategory = (id: number) => {
//   const SQLcommand = `DELETE FROM youtube.category WHERE id=${id}`
//   return dal_mysql.execute(SQLcommand)
// }

// const updateCategory = (cat: typeof Category) => {}

// const getAllCategories = async () => {
//   const SQLcommand = `SELECT * FROM youtube.category`
//   return await dal_mysql.execute(SQLcommand)
// }

const getSongId = async (song: string) => {
  const SQLcommand = `SELECT id FROM youtube.songs WHERE url = 'https://www.youtube.com/watch?v=${song}'`
  return await dal_mysql.execute(SQLcommand)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addSong,
  getSongId,
  // updateSong,
  deleteSong,
  // getSongById,
  getAllSongs,
  createSongsTable,
  createCategoriesTable,
  // addCategory,
  // deleteCategory,
  // updateCategory,
  // getAllCategories,
}
