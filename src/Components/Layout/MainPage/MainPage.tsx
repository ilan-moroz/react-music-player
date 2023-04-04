import { useEffect, useState } from 'react'
import Song from '../../../model/Song'
import SingleSong from '../SingleSong/SingleSong'
import './MainPage.css'

function MainPage(): JSX.Element {
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    setSongs(
      localStorage.getItem('songs')
        ? JSON.parse(localStorage.getItem('songs') || '[]')
        : [],
    )
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
