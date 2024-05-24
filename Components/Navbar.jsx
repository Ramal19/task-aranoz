import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp"/>

            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/add'}><li>Add</li></Link>
                <Link to={'/admin'}><li>Admin Panel</li></Link>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>  
    </>
  )
}

export default Navbar