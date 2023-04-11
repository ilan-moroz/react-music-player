import { useEffect, useState } from 'react'
import Song from '../../../model/Song'
import SingleSong from '../SingleSong/SingleSong'
import './MainPage.css'
import axios from 'axios'

function MainPage(): JSX.Element {
  const [songs, setSongs] = useState<Song[]>([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/videos/allSongs')
      .then((response) => {
        setSongs(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="MainPage">
      <h1>
        Playlist
        <br />
        🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶🎶
      </h1>
      {songs.map((song) => (
        <SingleSong
          songId={song.url.split('=')[1]}
          songImg={song.songImg}
          songTitle={song.songName}
          songInfo={song.songInfo}
        />
      ))}
    </div>
  )
}

export default MainPage
