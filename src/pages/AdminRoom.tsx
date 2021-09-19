import { useHistory, useParams } from 'react-router-dom'
import SVG from 'react-inlinesvg'

import { database } from '../services/firebase';
import { useRoom } from "../hooks/useRoom";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { QuestionCard } from '../components/QuestionCard';

import "../styles/room.scss";

import checkIcon from '../assets/images/check.svg'
import answerIcon from '../assets/images/answer.svg'
import deleteIcon from '../assets/images/delete.svg'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const {questions, title} = useRoom(roomId);

  const quantPerguntas = questions.length;

  async function handleEndRoom() {
    if (
      window.confirm("Tem certeza que deseja encerrar esta sala?")
    ){
      await database.ref(`rooms/${roomId}`).update({
        closedAt: new Date(),
      })
    }

    history.push("/")
  }

  async function handleDeleteQuestion(questionId: string) {
    // TODO: use modal confirmation
    if (
      window.confirm("Tem certeza que deseja excluir essa pergunta?")
    ){
      await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="" />
          <div>
            <RoomCode roomCode={roomId} />
            <Button onClick={handleEndRoom} isOutlined>Encerrar sala</Button>
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
            <QuestionCard key={question.id} {...question}>
              <span className="action check">
                <button type="button" aria-label="marcar como respondida">
                  <SVG src={checkIcon}/>
                </button>
              </span>
              <span className="action answer">
                <button type="button" aria-label="marcar como respondendo">
                  <SVG src={answerIcon}/>
                </button>
              </span>
              <span className="action delete">
                <button
                  type="button"
                  aria-label="deletar pergunta"
                  onClick={()=>{handleDeleteQuestion(question.id)}}
                >
                  <SVG src={deleteIcon}/>
                </button>
              </span>
            </QuestionCard>
          ))}
        </section>
      </main>
    </div>
  );
}
