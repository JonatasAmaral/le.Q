import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

export function NewRoom() {
  const {user} = useContext(AuthContext);
  const history = useHistory();

  // if (!user) signInWithGoogle();
  if (!user) history.push('/');
  
return (
  <div id="page-auth">
    <aside>
      <img
        src={illustrationImg}
        alt="Illustração simbolizando perguntas e respostas"
      />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>tire as duvidas da sua audiencia em tempo real</p>
    </aside>
    <main>
      <div className="main-content">
        <img src={logoImg} alt="logo letmeask" />

        <h2>Crie uma sala nova</h2>

        <form action="">
          <input type="text" placeholder="Nome da sala" />
          <Button type="submit">Criar sala</Button>
        </form>

        <p>
          Quer entrar em uma sala já existente?
          <Link to="/">Clique aqui</Link>
        </p>

      </div>
    </main>
  </div>
);}
