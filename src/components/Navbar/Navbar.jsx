import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
   font-family: "Montserrat", sans-serif;
  z-index: 98;
  position: relative;
  background-color: #000;
  border-bottom: 1px solid #CCA354;
  .logo {
    padding: 15px 0;
  }
  @media (max-width: 700px) {
   height: 1px;
   border: none;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar