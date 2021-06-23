import { useHistory } from 'react-router-dom';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import loginIcon from "../assets/images/log-in.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

export function Home() {
  const history = useHistory();

  function navigateToNewRoom() {
    history.push('/rooms/new');
  }
  
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

        <button className="create-room" onClick={navigateToNewRoom} >
          <img src={googleIconImg} alt="logo da Google" />
          Crie sua sala com o Google
        </button>

        <span className="separator">ou entre em uma sala</span>

        <form action="">
          <input type="text" placeholder="Digite o código da sala" />
          <Button type="submit">
            <img src={loginIcon} alt="Icone representando login" />
            Entrar na sala
          </Button>
        </form>
      </div>
    </main>
  </div>
);}
