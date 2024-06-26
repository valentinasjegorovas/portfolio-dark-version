import React from 'react';
import Container from '../Container/Container';
import about from '../../assets/about.jpg';
import './about.scss';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.svg';
import github from '../../assets/github.svg';
import react from '../../assets/react.svg';
import redux from '../../assets/redux.svg';
import git from '../../assets/git.svg';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay]);

const About = () => {
  const skills = [html, css, js, github, react, redux, git];

  return (
    <section className="about" id="about">
      <h1>About Me</h1>
      <Container>
        <div className="about__content">
          <img src={about} alt="about me" className="about__content__image" />
          <div className="about__content__description">
            <h2>My Introduction</h2>
            <p>
              Hello! My name is Valentinas, and I am actively studying Front End
              technologies such as HTML, CSS, JavaScript/TypeScript, React,
              Next.js, and Tailwind CSS. I am working towards my goal of
              becoming a Front End developer. I enjoy learning and discovering
              new things every day. I am open to any opportunities that can help
              me grow and develop in this field.
            </p>
            <h2>My technical skills</h2>
            <div className="about__content__skills">
              <Swiper
                style={{ maxWidth: 100 + '%' }}
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={1500}
              >
                {skills.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img className="about__content__skills__icons" src={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
