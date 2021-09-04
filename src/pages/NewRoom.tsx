import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";
import { database } from '../services/firebase';

export function NewRoom() {
  const {user, signInWithGoogle} = useAuth();
  const history = useHistory();

  const [roomName, setRoomName] = useState('');

  async function handleCreateRoom(event:FormEvent) {
    event.preventDefault();

    if (roomName.trim() === '') return;
    if (!user) await signInWithGoogle();

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user?.id,
    })

    history.push(`/room/${firebaseRoom.key}`)
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

        <h2>Crie uma sala nova</h2>

        <form onSubmit={handleCreateRoom}>
          <input
            type="text"
            placeholder="Nome da sala"
            onChange={(e) => setRoomName(e.target.value)}
            value={roomName}
          />
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
