import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'

export default function App(){
  return(
    <main>
      <h1>App</h1>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>


        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </main>
  )
}
