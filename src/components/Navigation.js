import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 1.5rem 0;
  border-bottom: 1px solid #f1f3f5;
  position: sticky;
  top: 0;
  z-index: 1000;
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
  color: #495057;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: #0170CE;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #0170CE;
    
    &:after {
      width: 100%;
    }
  }

  ${props => props.active && `
    color: #0170CE;
    &:after {
      width: 100%;
    }
  `}
`;

const Navigation = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavList>
        <li>
          <NavLink to="/" active={location.pathname === '/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" active={location.pathname === '/work'}>
            Work
          </NavLink>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navigation; 