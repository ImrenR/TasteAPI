import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
  const [open, setOpen] = useState(false)
 
  return (
<Nav>
  <Logo
  to="/home">
    MyRecipes
  </Logo>
  <Hamburger onClick={()=>setOpen(!open)}>
    <GiHamburgerMenu/>
  </Hamburger>
 <Menu ackapa={open}>
  
  <MenuLink to="/about">ABOUT</MenuLink>
  <a href="https://github.com/ImrenR" target='blank'>GITHUB</a>
   <MenuLink to="/about">LOGOUT</MenuLink>
  </Menu> 
</Nav>
  )
}

export default Navbar