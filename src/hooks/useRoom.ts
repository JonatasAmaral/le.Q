import { useEffect, useState } from "react"
import { database } from "../services/firebase";
import { UserType } from '../contexts/AuthContext';


type QuestionType = {
  content: string,
  author: UserType,
  isHighlighted: boolean,
  isAnswered: boolean,
}
export type ParsedQuestionType = {
  id: string
} & QuestionType

type FireBaseQuestions = Record<string, QuestionType>

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<ParsedQuestionType[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value',room=>{
      const firebaseQuestions: FireBaseQuestions = room.val().questions ?? {}
      const parsedQuestions:ParsedQuestionType[] = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            ...value,
            id: key
          }
        }
      );

      setTitle(room.val().title)
      setQuestions(parsedQuestions);
      
    })
  }, [roomId]);
  return {questions, title}
}
