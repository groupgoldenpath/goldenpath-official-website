import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    a{
        text-decoration: none;
          background: -webkit-linear-gradient(#F8F377, #E7A84F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      }
    a:hover{
      text-decoration: none;
        background: -webkit-linear-gradient(#eee, #333);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  }
  @media (max-width: 700px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    border-left: 1px solid #fff;
    li {
      a{
      text-decoration: none;
      color: #fff;
    }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li> <a href="/"><b>Início</b></a> </li>
      <li> <a href="/goldenpath"><b>Golden Path</b></a> </li>
      <li> <a href="/rentabilidade"><b>Rentabilidade</b></a> </li>
      <li> <a href="/evolution"><b>Evolution</b></a> </li>
      <li> <a href="/gpx"><b>GPX</b></a> </li>
      <li> <a href="/robos"><b>Robõs</b></a> </li>
      <li> <a href="/projetos"><b>Projetos</b></a> </li>
    </Ul>
  )
}

export default RightNav