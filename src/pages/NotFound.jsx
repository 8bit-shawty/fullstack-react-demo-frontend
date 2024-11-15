import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main>
        <h1>Page Not Found</h1>
        <Link to='/'>Go back home</Link>
    </main>
  )
}

export default NotFound