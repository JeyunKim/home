import React from 'react';
import styled from 'styled-components';
import Skills from '../components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
    background: ${props => props.color || '#0170CE'};
    border-radius: 2px;
  }
`;

const IntroSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MainTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  color: #2c3e50;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.2;
  
  span {
    color: #0170CE;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(1, 112, 206, 0.1);
      z-index: -1;
    }
  }
`;

const SubTitle = styled.p`
  font-size: 1.6rem;
  color: #495057;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.02em;
  opacity: 0.9;
  max-width: 600px;
`;

const Location = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
  
  svg {
    color: #0170CE;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  
  p {
    color: #495057;
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background: white;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background: #f8f9fa;
  }

  svg {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${props => props.primary ? '#0170CE' : 'white'};
  color: ${props => props.primary ? 'white' : '#2c3e50'};
  border: ${props => props.primary ? 'none' : '2px solid #0170CE'};
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background: ${props => props.primary ? '#015ba5' : '#f8f9fa'};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Main>
      <Section>
        <IntroSection>
          <MainTitle>
            Hi, I'm <span>Jay</span>
          </MainTitle>
          <SubTitle>
            Crafting Digital Harmony through Thoughtful Design and Scalable Innovation
          </SubTitle>
          <Location>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            Phoenix, AZ
          </Location>
        </IntroSection>
      </Section>

      <Section>
        <Skills />
      </Section>

      <Section>
        <SectionTitle color="#0170CE">Contact</SectionTitle>
        <ContactSection>
          <ContactInfo>
            <p>I'm open to new opportunities and collaborations.</p>
            <p>Email: jay.jeyun.k@gmail.com</p>
          </ContactInfo>
          <ButtonGroup>
            <CTAButton 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              primary
            >
              <FontAwesomeIcon icon={faFileAlt} /> Download Resume
            </CTAButton>
            <CTAButton 
              href="mailto:jay.jeyun.k@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Get in Touch
            </CTAButton>
          </ButtonGroup>
          <SocialLinks>
            <SocialLink href="https://github.com/JeyunKim/jeyunkim.github.io" target="_blank">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/jeyunkim" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </SocialLink>
          </SocialLinks>
        </ContactSection>
      </Section>
    </Main>
  );
};

export default Home; 