import React from 'react';
import styled from 'styled-components';
import gmLogo from '../assets/gm-logo.png.png';
import moceanLogo from '../assets/mocean-logo.png.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const Section = styled.section`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  margin-bottom: 3rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Job = styled.div`
  position: relative;
  padding: 2rem;
  margin: -1rem;
  border-radius: 12px;
  transition: background-color 0.3s ease;
  overflow: hidden;

  &:hover {
    background-color: #f8f9fa;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.color || '#2c3e50'};
  letter-spacing: -0.02em;
`;

const CompanyLogo = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
  filter: ${props => props.color ? 'none' : 'grayscale(100%)'};
  transition: filter 0.3s ease;

  ${Job}:hover & {
    filter: none;
  }
`;

const Duration = styled.span`
  color: #6c757d;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 20px;
`;

const BackgroundLogo = styled.img`
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  height: 160%;
  opacity: 0.04;
  object-fit: contain;
  transition: opacity 0.3s ease;

  ${Job}:hover & {
    opacity: 0.08;
  }
`;

const JobTitle = styled.h3`
  color: ${props => props.color || '#2c3e50'};
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  position: relative;
  z-index: 1;
`;

const Description = styled.p`
  color: #495057;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  padding-left: 1rem;
  border-left: 3px solid ${props => props.color || '#dee2e6'};
`;

const SectionTitle = styled.h2`
  color: #212529;
  margin: 0 0 3rem 0;
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
    background: ${props => props.color || '#0170CE'};
    border-radius: 2px;
  }
`;

const ProjectLink = styled.a`
  color: #0170CE;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const Work = () => {
  return (
    <Main>
      <Section>
        <SectionTitle color="#0170CE">Work Experience</SectionTitle>
        
        <Job>
          <JobTitle color="#0170CE">Software Developer</JobTitle>
          <JobHeader>
            <Company color="#0170CE">
              <CompanyLogo src={gmLogo} alt="GM Logo" color="#0170CE" />
              General Motors
            </Company>
            <Duration>February 2022 - October 2023</Duration>
          </JobHeader>
          <Description color="#0170CE">Web Application Development</Description>
        </Job>

        <Job>
          <JobTitle>Software Developer</JobTitle>
          <JobHeader>
            <Company>
              <CompanyLogo src={moceanLogo} alt="MOCEAN Logo" />
              MOCEAN Physical Therapy
            </Company>
            <Duration>February 2021 - November 2021</Duration>
          </JobHeader>
          <Description>Desktop Application Development</Description>
        </Job>
      </Section>

      <Section>
        <SectionTitle color="#0170CE">Personal Project</SectionTitle>
        <Job>
          <JobTitle color="#0170CE">Insurance Comparator</JobTitle>
          <Description color="#0170CE">
            A tool for comparing insurance policies and rates
            <ProjectLink 
              href="https://github.com/JeyunKim/insurance-comparator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> View Project Overview
            </ProjectLink>
          </Description>
        </Job>
      </Section>
    </Main>
  );
};

export default Work; 