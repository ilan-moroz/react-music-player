import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import cat from '../../../model/Cat'
import Song from '../../../model/Song'
import './AddSong.css'

function AddSong(): JSX.Element {
  const apiKey = 'AIzaSyCrVV4Z7MrPNrwYCauxAwuWEY7A4HCZatU'
  const [songImg, setImg] = useState('')
  const [songName, setSongName] = useState('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    // formState: { },
  } = useForm<Song>()

  const send = (userData: Song) => {
    const songIdentifier = userData.url.split('=')[1]
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`,
      )
      .then(async (response) => {
        console.log(response)
        setSongName(response.data.items[0].snippet.title)
        setImg(response.data.items[0].snippet.thumbnails.medium.url)
        userData.songImg = response.data.items[0].snippet.thumbnails.medium.url
        userData.songName = response.data.items[0].snippet.title
        userData.songInfo = response.data.items[0].snippet.description
        axios
          .post('http://localhost:8080/api/v1/videos/addSong', userData)
          .then((response) => {
            console.log(response)
            navigate('/')
          })
          .catch((error) => {
            console.error(error)
          })
      })
  }

  return (
    <div className="AddSong Box">
      <h1>Add New Song</h1>
      <br />
      <form onSubmit={handleSubmit(send)}>
        <InputLabel id="labelUrl">Youtube URL: </InputLabel>
        <TextField
          placeholder="enter youtube URL"
          style={{ width: '80%' }}
          {...register('url')}
        />
        <br /> <br />
        <InputLabel id="labelCat">Select Category: </InputLabel>
        <Select
          labelId="labelCat"
          style={{ width: '80%' }}
          {...register('category')}
        >
          {cat.allCat().map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <br />
        <br />
        <Button
          type="submit"
          style={{ width: '10rem' }}
          variant="outlined"
          color="success"
        >
          Add Song
        </Button>
      </form>
      <br />
      <hr />
      {songImg.length > 1 && <img src={songImg} alt={songImg} />}
      <br />
      <br />
      {songName.length > 1 && <div>{songName}</div>}
      <br />
    </div>
  )
}

export default AddSong
