import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/chats'>Chats</Link>
    </nav>
  )
}

export default Nav