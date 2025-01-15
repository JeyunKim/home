import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0170CE, #2d3436);
  }
`;

const HeaderContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
`;

const Subtitle = styled.div`
  color: #34495e;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  opacity: 0.9;
`;

const Location = styled.div`
  display: inline-block;
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  background: white;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  transition: all 0.3s ease;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 1px 1px, #e9ecef 1px, transparent 0);
  background-size: 40px 40px;
  opacity: 0.4;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundPattern />
      <HeaderContent>
        <Title>Je Yun Kim</Title>
        <Subtitle>Software Developer</Subtitle>
        <Location>Phoenix, AZ</Location>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 