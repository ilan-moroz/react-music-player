import { useNavigate } from 'react-router-dom'
import './SingleSong.css'

interface SongProps {
  songId: string
  songImg: string
  songTitle: string
  songInfo: string
}
function SingleSong(props: SongProps): JSX.Element {
  const navigate = useNavigate()
  return (
    <div
      className="SingleSong Box"
      style={{ width: '40%', margin: '30px' }}
      onClick={() => navigate('/player/' + props.songId)}
    >
      <img src={props.songImg} alt={props.songId} />
      <br />
      <br />
      {props.songTitle}
      <br />
      <br />
      {props.songInfo}
    </div>
  )
}

export default SingleSong
