import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const linkClassName = ({ isActive }) =>
    isActive ? 'header__link header__link--active' : 'header__link';

  return (
    <header className='header'>
      <nav>
        <NavLink to='/' className={linkClassName}>Home</NavLink>
        <NavLink to='portfolio' className={linkClassName}>Portfolio</NavLink>
        <NavLink to='contact' className={linkClassName}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
