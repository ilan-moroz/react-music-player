import { Button } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useNavigate } from 'react-router-dom'
import cat from '../../../model/Cat'
import './Categories.css'

function Categories(): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className="Categories">
      <h2>Categories</h2>
      <hr />
      {cat.allCat().map((item) => (
        <h3 key={item}>{item}</h3>
      ))}
      <br />
      <br />
      <ButtonGroup>
        <Button
          variant="outlined"
          color="success"
          style={{ width: '7rem' }}
          onClick={() => navigate('/addSong')}
        >
          Add Song
        </Button>
        <Button variant="outlined" color="error" style={{ width: '7rem' }}>
          Add Category
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Categories
