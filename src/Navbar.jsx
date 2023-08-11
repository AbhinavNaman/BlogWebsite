import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>NAMAN Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#FF8B13',
            borderRadius: '8px' ,
            borderColor: '#F273E6'
          }}>New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;