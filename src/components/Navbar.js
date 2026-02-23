import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'red' : 'black'
        }
    }
  return (
    <nav>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} to='/order-summary'>Order Summary</NavLink>
    </nav>
  )
}
