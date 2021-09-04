import { FormEvent, useState } from 'react';
import  { useParams } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import "../styles/room.scss";

type RoomParams = {
  id: string
}

export function Room() {
  const {user, signInWithGoogle} = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('')

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    
    if (newQuestion.trim() === '') return;
    if (!user) {
      alert('You must be logged in');
      throw new Error('You must be logged in');
    }
  }

  const quantPerguntas = Math.floor(Math.random()*4);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="" />
          <RoomCode roomCode={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala: React</h1>

          {quantPerguntas > 0 && (
            <span>
              {quantPerguntas} pergunta{quantPerguntas !== 1 && "s"}
            </span>
          )}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que quer perguntar?"
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
          ></textarea>

          <div className="form-footer">
            {!user ? (
              <span>
                Para enviar uma pergunta <button onClick={signInWithGoogle}>faça login</button>.
              </span>
            ) : (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            )}
            <Button
              type="submit"
              disabled={!user || newQuestion.trim() === ""}
            >
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
