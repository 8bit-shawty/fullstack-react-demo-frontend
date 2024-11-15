import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import ChatsPage from './pages/ChatsPage'

export default function App(){
  return(
    <main>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/chats' element={<ChatsPage/>}/>


        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </main>
  )
}
