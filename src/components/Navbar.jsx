import { NavLink } from 'react-router-dom';
// import SearchBar from '../components/SearchBar';

function Navbar() {
  return (
    <header>
      <h1>Puppy Bowl 2024</h1>
      <div className='navSearch'>
        <nav >
          {/* <NavLink to='/'>Home</NavLink> */}
          <NavLink to='/'>Player Roster</NavLink>
          <NavLink to='/newplayer'>Add New Player</NavLink>
        </nav>
        {/* <SearchBar /> */}
      </div>
    </header>
  );
}

export default Navbar;
