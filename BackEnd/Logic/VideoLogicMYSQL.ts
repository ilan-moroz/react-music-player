import Song from '../../src/model/Song'
import dal_mysql from '../Utils/dal_mysql'

const addSong = (newSong: Song) => {}

const updateSong = (song: Song) => {}

const deleteSong = (id: number) => {}

const getSongById = (id: number) => {}

const getAllSongs = () => {}

const createSongsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS youtube.songs
    (id INT NOT NULL AUTO_INCREMENT,
    url VARCHAR(45) NOT NULL,
    songName VARCHAR(45) NOT NULL,
    songImg VARCHAR(45) NOT NULL,
    category INT NOT NULL,
    videoFile VARCHAR(45) NOT NULL,
    PRIMARY KEY(id));`
  const response = dal_mysql.execute(SQLcommand)
  console.log(response)
}

const createCategoriesTable = () => {}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addSong,
  updateSong,
  deleteSong,
  getSongById,
  getAllSongs,
  createSongsTable,
  createCategoriesTable,
}
