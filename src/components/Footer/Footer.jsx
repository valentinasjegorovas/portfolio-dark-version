import React from 'react';
import './footer.scss';
import Container from '../Container/Container';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="navbar__logo">Portfolio</div>
          <div className="footer__content__links">
            <a href="https://github.com/valentinasjegorovas">
              <AiFillGithub size={'30px'} />
            </a>
            <a href="https://www.linkedin.com/in/valentinas-jegorovas-7a0295204/">
              <AiFillLinkedin size={'30px'} />
            </a>
            <a href="#">
              <AiFillFacebook size={'30px'} />
            </a>
          </div>
          <p className="footer__content__text">All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
