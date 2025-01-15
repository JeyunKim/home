import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #f8f9fa;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e9ecef;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/work">Work</NavLink></li>
      </NavList>
    </Nav>
  );
};

export default Navigation; 