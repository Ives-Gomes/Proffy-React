import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/53413719?s=460&u=1e98084c7754352365563418c0566299f52c7e39&v=4"
          alt="Ives Moreira"
        />

        <div>
          <strong>Ives Moreira</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Uma pessoa apaixonada por games. Gostar mais do que jogar só mesmo saber
        como o jogo foi feito. Espero um dia desenvolver grandes jogos através
        da programação.
        <br />
        <br /> Para alcançar meu sonho estudo bastante e o desenvolvimento web
        está me ajudando muito a dar os primeiros passos nesse sonho.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>100,00</strong>
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
