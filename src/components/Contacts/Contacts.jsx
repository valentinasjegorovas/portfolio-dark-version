import React from 'react';
import './contacts.scss';
import Container from '../Container/Container';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineEnvironment } from 'react-icons/ai';
import Form from '../CustomForm/CustomForm';

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <h1>Contacts</h1>
      <Container>
        <div className="contacts__content">
          <div className="contacts__content__left">
            <h2>Stay in touch with me</h2>
            <p>
              I am currently available for new projects and opportunities. Feel
              free to contact me to discuss details. I'm excited to collaborate
              and bring your ideas to life. Let's create something amazing!
            </p>
            <div className="contacts__content__info">
              <AiOutlineMail size={'30px'} />
              <div className="contacts__content__links">
                <h3>Email</h3>
                <p>valentinas.jegorovas@gmail.com</p>
              </div>
            </div>
            <div className="contacts__content__info">
              <AiOutlinePhone size={'30px'} />
              <div className="contacts__content__links">
                <h3>Phone Number</h3>
                <p>+37064313082</p>
              </div>
            </div>
            <div className="contacts__content__info">
              <AiOutlineEnvironment size={'30px'} />
              <div className="contacts__content__links">
                <h3>Location</h3>
                <p>Lithuania, Vilnius</p>
              </div>
            </div>
          </div>
          <div className="contacts__content__right">
            <Form />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
