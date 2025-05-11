import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#333',
      padding: '15px',
      marginBottom: '20px'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar