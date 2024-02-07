import React from 'react';
import IMG1 from '../../assets/Url.png';
import IMG2 from '../../assets/Disney.png';
import IMG3 from '../../assets/Library.png';
import IMG4 from '../../assets/Shop.png';
import IMG5 from '../../assets/Crud.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'URL Shortener using MERN',
      img: IMG1,
      description:
        'Constructed a full-stack web application for URL shortening,equipped with features for user authentication such as signup, login, password reset, and more.',
      technologies: 'React,NodeJS,Express,MongoDb',
      link: 'https://amazing-truffle-ce439e.netlify.app/',
      github: 'https://github.com/Nithishluhar/Guvi-task/blob/main/NodeJS-task%2005/Backend/server.js',
    },
    {
      id: 2,
      title: 'Disney Clone',
      img: IMG2,
      description:
        'Developed a visually appealing movie app using HTML,Tailwind CSS, and ReactJS, focusing on creating a stunning user interface.',
      technologies: 'React | Tailwind',
      link: 'https://disneyplus-rho.vercel.app/',
      github: 'https://github.com/Nithishluhar/Project_1',
    },
    {
      id: 3,
      title: 'Library management project',
      img: IMG3,
      description: 'Elevating it with seamless object schema validation using YupValidation.',
      technologies: 'React | Formik,Yup',
      link: 'https://papaya-naiad-7b6bd2.netlify.app/',
      github: 'https://github.com/Nithishluhar/Guvi-task/blob/main/React-task-07/formik_validation/src/LibrayManagement/Validation.jsx',
    },
    {
      id: 4,
      title: 'Shopping Cart using ContextAPI',
      img: IMG4,
      description:
        'Fully responsive interactive website using Json data ',
      technologies: 'ReactJS, Bootstrap',
      link: 'https://unique-empanada-fa83d4.netlify.app/',
      github: 'https://github.com/Nithishluhar/Guvi-task/blob/1d406746858fc5812d702d4312ce2187f9affddc/React-task%2005/contex_api/src/AddToCart.jsx',
    },
    {
      id: 5,
      title: 'CRUD Using Axios',
      img: IMG5,
      description:
        'CRUD operations with user data using React and Axios fetch to interact with a mock API.        ',
      technologies: 'React, MockAPI',
      link: 'https://resonant-meerkat-c8c765.netlify.app/',
      github: 'https://github.com/Nithishluhar/Guvi-task/blob/991e1c27f3dd75cbff1e5755446d91992ffc402d/React-task%2006/json_server/src/App.jsx',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
