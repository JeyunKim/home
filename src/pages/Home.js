import React from 'react';
import styled from 'styled-components';
import Skills from '../components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
  text-align: left;
`;

const Greeting = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  letter-spacing: -0.03em;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #495057;
  line-height: 1.8;
  margin: 0;
  padding-left: 1rem;
  border-left: 3px solid #0170CE;
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
  background-color: #f8f9fa;
  color: #212529;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
  }

  svg {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }
`;

const Home = () => {
  return (
    <Main>
      <Section>
        <IntroSection>
          <Greeting>Hello, I'm Jay</Greeting>
          <IntroText>
            Software Developer based in Phoenix, AZ, specializing in building scalable backend solutions.
          </IntroText>
        </IntroSection>
      </Section>

      <Section>
        <Skills />
      </Section>

      <Section>
        <SectionTitle color="#0170CE">Contact</SectionTitle>
        <ContactInfo>
          <p>I'm always open to new opportunities and collaborations.</p>
          <p>Email: jay.jeyun.k@gmail.com</p>
        </ContactInfo>
        <SocialLinks>
          <SocialLink href="https://github.com/JeyunKim" target="_blank">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/jeyunkim" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </SocialLink>
        </SocialLinks>
      </Section>
    </Main>
  );
};

export default Home; 