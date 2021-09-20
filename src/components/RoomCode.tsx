import copyimg from "../assets/images/copy.svg";

import '../styles/room-code.scss'

type RoomCodeProps = {
  roomCode: string;
}

export function RoomCode( {roomCode}: RoomCodeProps) {

  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(roomCode)
  }
  return (
    <button
      className="room-code"
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyimg} alt="Copiar código da sala" />
      </div>
      <span><i style={{opacity: 0.5}}>Sala #</i>{roomCode}</span>
    </button>
  );
}
