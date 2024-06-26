import React from 'react';
import './hero.scss';
import { motion } from 'framer-motion';
import profile from '../../assets/profile.jpg';
import Button from '../Button/Button';
import Container from '../Container/Container';

const Hero = () => {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    contactsSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero__content">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero__content__image"
            src={profile}
            alt="profile"
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero__content__text"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Valentinas Jegorovas
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Front End Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Enthusiastic and passionate about web development, I am a beginner
              Front End developer aspiring to create amazing and interactive
              user interfaces.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="hero__content__btns">
                <Button onClick={scrollToContacts}>Contacts</Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
