import { FormEvent, KeyboardEvent, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'

import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from "../hooks/useRoom";

import logoImg from "../assets/images/logo.svg";
import likeIcon from '../assets/images/like.svg'
import emptyQuestionsIcon from '../assets/images/empty-questions.svg'

import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { QuestionCard } from '../components/QuestionCard';
import "../styles/room.scss";

type RoomParams = {
  id: string
}

export function Room() {
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const roomRef = database.ref(`rooms/${roomId}`).get();

  const [newQuestion, setNewQuestion] = useState('')
  const {questions, title} = useRoom(roomId);

  roomRef.then( data=>{
    if(data.val().closedAt) {
      history.push("/")
      return
    }
    if(data.val().authorId == user?.id){
      history.push(`/admin/room/${roomId}`)
      return
    }
  }).catch(err=>console.log(err));

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

  async function handleLikeQuestion(questionId:string, likeId: string | undefined) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes`)
        .push({
          authorId: user?.id,
        });
    }
  }

  function checkCTRLSubmit(event:KeyboardEvent) {
    if (event.ctrlKey && event.key === 'Enter'){
      
      handleSendQuestion(event)
      
    }
  }

  const quantPerguntas = questions.length;

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <Link to="/" aria-label="ir para home"><img src={logoImg} alt="" /></Link>
          <RoomCode roomCode={roomId} />
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

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que quer perguntar?"
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
            disabled={!user}
            onKeyDown={checkCTRLSubmit}
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
      
        <section className="questions-list">
          { quantPerguntas>0 ? (
            questions.map(question=>(
              <QuestionCard key={question.id} {...question}>
                <span className={`action like ${question.likeId && "activated"}`}>
                  {question.likeCount>0 && <span>{question.likeCount}</span>}
                  <button
                    disabled={!user || question.isAnswered}
                    type="button"
                    aria-label="like"
                    onClick={()=>handleLikeQuestion(question.id, question.likeId)}
                  >
                    <SVG src={likeIcon}/>
                  </button>
                </span>
              </QuestionCard>
            ))
          ):(
            <div className="no-questions">
              <img src={emptyQuestionsIcon} alt="icones de mensagem" />
              <h3>Nenhuma pergunta por aqui</h3>
              <p>Compartilhe o código desta sala, e veja algumas novas perguntas!</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
