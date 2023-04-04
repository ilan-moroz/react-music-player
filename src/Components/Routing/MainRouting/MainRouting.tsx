import { Route, Routes } from 'react-router-dom'
import AddCat from '../../Layout/AddCat/AddCat'
import AddSong from '../../Layout/AddSong/AddSong'
import MainPage from '../../Layout/MainPage/MainPage'
import Page404 from '../../Layout/Page404/Page404'
import Player from '../../Layout/Player/Player'
import Songs from '../../Layout/Songs/Songs'
import './MainRouting.css'

function MainRouting(): JSX.Element {
  return (
    <div className="MainRouting">
      <Routes>
        <Route path="/addSong" element={<AddSong />} />
        <Route path="/addCat" element={<AddCat />} />
        <Route path="/songByCat/:catName" element={<Songs />} />
        <Route path="player/:videoId" element={<Player />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default MainRouting
