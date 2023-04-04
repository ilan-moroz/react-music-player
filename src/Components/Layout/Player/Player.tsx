import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import './Player.css'

function Player(): JSX.Element {
  const params = useParams()
  const navigate = useNavigate()
  const songId = params.videoId
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
      <Button
        variant="outlined"
        color="success"
        onClick={() => navigate('/')}
        style={{ width: '50%' }}
      >
        Go Home
      </Button>
    </div>
  )
}

export default Player
