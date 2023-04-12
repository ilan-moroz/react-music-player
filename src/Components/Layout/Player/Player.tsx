import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import './Player.css'
import axios from 'axios'

function Player(): JSX.Element {
  const params = useParams()
  const navigate = useNavigate()
  const songId = params.videoId

  const getSongId = async (songId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/videos/songId/${songId}`,
      )
      return response.data[0].id
    } catch (error) {
      console.error(error)
    }
  }

  const deleteSong = async (id: number) => {
    try {
      return await axios.delete(
        `http://localhost:8080/api/v1/videos/delete/${id}`,
      )
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteSong = async (songId: string) => {
    const id = await getSongId(songId)
    console.log(id)
    await deleteSong(id)
    navigate('/')
  }

  return (
    <div className="Player">
      <iframe
        width="800"
        height="500"
        src={`https://www.youtube.com/embed/${songId}?controls=1&autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <br />
      <br />
      <Button
        variant="outlined"
        color="success"
        onClick={() => navigate('/')}
        style={{ width: '50%' }}
      >
        Go Home
      </Button>
      <br />
      <br />
      <Button
        variant="outlined"
        color="warning"
        onClick={() => songId && handleDeleteSong(songId)}
        style={{ width: '50%' }}
      >
        Delete Song
      </Button>
    </div>
  )
}

export default Player
