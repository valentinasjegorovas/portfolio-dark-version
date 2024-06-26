import React from 'react';
import Container from '../Container/Container';
import './works.scss';

const MyWorks = [
  {
    title: 'TMDB App',
    image: require('../../assets/tmdb.png'),
    link: 'https://valentinasjegorovas.github.io/tmdb-app/',
  },

  {
    title: 'Marvel App',
    image: require('../../assets/marvel.png'),
    link: 'https://valentinasjegorovas.github.io/marvel-app/',
  },

  {
    title: 'Movies App',
    image: require('../../assets/movies.png'),
    link: 'https://valentinasjegorovas.github.io/movies-app/',
  },

  {
    title: 'Coming Soon',
    image: require('../../assets/soon.jpg'),
    link: '#',
  },

  {
    title: 'Coming Soon',
    image: require('../../assets/soon.jpg'),
    link: '#',
  },

  {
    title: 'Coming Soon',
    image: require('../../assets/soon.jpg'),
    link: '#',
  },
];

const Works = () => {
  return (
    <section className="works" id="works">
      <Container>
        <h1>My works</h1>
        <div className="works__content">
          {MyWorks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="works__content__img"
                src={item.image}
                alt={item.title}
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Works;
