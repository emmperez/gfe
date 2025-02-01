import './Header.css'
import { Outlet, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header res'>
        <nav>
          <Link className='neu-900' to="/">ui__components</Link>
          <Link className='neu-900' to="/components">components</Link>
          <Link className='neu-900'>grid</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
};
export default Header