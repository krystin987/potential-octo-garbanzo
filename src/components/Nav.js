import React from 'react'
import logo from '/Users/krystinvilleneuve/react_projects/potential-octo-garbanzo/src/icons_assets/Logo.svg';
import "./styles/nav.css"

const Nav = () => {
  return (
    <div className='nav-div'>
        <img src={logo} alt="logo" />
        <ul>
            <li>
                <a href="./Main">        Home     </a>
            </li>
            <li>
                <a href="./Main">About</a>
            </li>
            <li>
                <a href="./Main">Menu</a>
            </li>
            <li>
                <a href="./Main">Reservations</a>
            </li>
            <li>
                <a href="./Main">Order Online</a>
            </li>
            <li>
                <a href="./Main">Login</a>
            </li>
        </ul>
    </div>
  )
}


export default Nav