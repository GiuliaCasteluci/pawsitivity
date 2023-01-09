import './style.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../Logo'

export default function HeaderOptions() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
      <nav className="navigation">
        <Logo />
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">Pet Adoption</a>
            </li>
            <li>
              <a href="/about">Shelters & Resources</a>
            </li>
            <li>
              <Link to='/petForm'>&nbsp;Emergency Surrender</Link>
              {/* old pet form */}
            </li>
            <li>
              <Link to='/emergency'>&nbsp;Available Pets</Link>    
              {/* old emegerncy surrender page        */}
            </li>
            <li>
              <Link to='/adopt'>&nbsp;Pet Tinter</Link>
              {/* old swipe page */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }