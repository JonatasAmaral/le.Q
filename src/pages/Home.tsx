import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import loginIcon from "../assets/images/log-in.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { database } from '../services/firebase';
import "../styles/auth.scss";
import { Button } from "../components/Button";

export function Home() {
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) await signInWithGoogle();
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    // if (roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      alert("Room doesn't exists");
      return;
    }

    history.push(`/room/${roomCode}`);
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

        <button className="create-room" onClick={handleCreateRoom}>
          <img src={googleIconImg} alt="logo da Google" />
          Crie sua sala com o Google
        </button>

        <span className="separator">ou entre em uma sala</span>

        <form onSubmit={handleJoinRoom}>
          <input
            type="text"
            placeholder="Digite o código da sala"
            onChange={(e) => setRoomCode(e.target.value)}
            value={roomCode}
          />
          <Button type="submit">
            <img src={loginIcon} alt="Icone representando login" />
            Entrar na sala
          </Button>
        </form>
      </div>
    </main>
  </div>
);}
