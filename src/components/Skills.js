import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons';

const SkillsContainer = styled.div`
  margin-top: -1rem;
`;

const SectionTitle = styled.h2`
  color: #212529;
  margin: 0 0 2rem 0;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 4px;
    background: #0170CE;
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillItem = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: #fff;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }

  h3 {
    color: #212529;
    margin: 1rem 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    color: #6c757d;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #0170CE;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <SectionTitle>Core Skills</SectionTitle>
      <SkillsGrid>
        <SkillItem>
          <IconWrapper>
            <FontAwesomeIcon icon={faJava} />
          </IconWrapper>
          <h3>Java</h3>
          <p>Spring Framework, REST APIs</p>
        </SkillItem>
        <SkillItem>
          <IconWrapper>
            <FontAwesomeIcon icon={faJs} />
          </IconWrapper>
          <h3>JavaScript</h3>
          <p>Frontend Development</p>
        </SkillItem>
        <SkillItem>
          <IconWrapper>
            <FontAwesomeIcon icon={faPython} />
          </IconWrapper>
          <h3>Python</h3>
          <p>Desktop Applications</p>
        </SkillItem>
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills; 