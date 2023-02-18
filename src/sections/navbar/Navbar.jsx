import Logo from './../../assets/logo.png'
import './navbar.css'
import data from './Data'
import { IoIosColorPalette } from 'react-icons/io'
const Navbar = () => {
    return (
        <nav>
            <div className="container nav_container">
                <a href="index.html" className='nav_logo'>
                    <img src={Logo} alt="Logo" />
                </a>
                <ul className='nav__menu' >
                    {
                        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</
                        a></li>)
                    }
                </ul>
                
                
            </div>
        </nav>
    )
}
export default Navbar