import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import "../styles/room.scss";

export function Room() {
  const quantPerguntas = Math.floor(Math.random()*4);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="" />
          <RoomCode roomCode={'65161361313'} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>
            {quantPerguntas} pergunta{quantPerguntas != 1 && "s"}
          </span>
        </div>

        <form>
          <textarea placeholder="O que quer perguntar?"></textarea>

          <div className="form-footer">
            <span>
              Para enviar uma pergunta <button>faça login</button>.
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
