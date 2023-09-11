import { useState } from 'react';
import './Header.css';

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header className={headerStyle}>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <button type="button" onClick={() => setDropdown(!dropdown)}>
              Services
              <span>&#8595;</span>
            </button>
            {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
