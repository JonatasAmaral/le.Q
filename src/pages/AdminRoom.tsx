import { FormEvent, useState } from 'react';
import  { useParams } from 'react-router-dom'

import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from "../hooks/useRoom";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { QuestionCard } from '../components/QuestionCard';
import "../styles/room.scss";

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const {user, signInWithGoogle} = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const [newQuestion, setNewQuestion] = useState('')
  const {questions, title} = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    
    if (newQuestion.trim() === '') return;
    if (!user) {
      alert('You must be logged in');
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion.trim(),
      author: user,
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion('');
  }

  const quantPerguntas = questions.length;

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="" />
          <div>
            <RoomCode roomCode={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala: {title}</h1>

          {quantPerguntas > 0 && (
            <span>
              {quantPerguntas} pergunta{quantPerguntas !== 1 && "s"}
            </span>
          )}
        </div>

        <section className="questions-list">
          {questions.map(question=>(
            <QuestionCard {...question} key={question.id} admin/>
          ))}
          
        </section>
      </main>
    </div>
  );
}
