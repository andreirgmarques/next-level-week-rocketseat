import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/19913411?s=460&u=859c8be81f5371eecabc226b28f76e812c98e906&v=4" alt="Avatar" />
        <div>
          <strong>Andrei Ricardo</strong>
          <span>Developer</span>
        </div>
      </header>

      <p>
        blablablablablablablabla
            <br /> <br />
            bla bla bla bla bla bla bla
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
