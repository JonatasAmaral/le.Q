import { useEffect, useState } from "react"
import { database } from "../services/firebase";
import { UserType } from '../contexts/AuthContext';
import { useAuth } from "./useAuth";


type QuestionType = {
  content: string,
  author: UserType,
  isHighlighted: boolean,
  isAnswered: boolean,
}
export type ParsedQuestionType = {
  id: string,
  likeCount: number,
  likeId: string | undefined,
} & QuestionType

type FireBaseQuestions = Record<string, QuestionType & {
  likes: Record<string, {
    authorId: string
  }>,
}>

export function useRoom(roomId: string) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<ParsedQuestionType[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value',room=>{
      const firebaseQuestions:FireBaseQuestions = room.val().questions ?? {}
      const parsedQuestions:ParsedQuestionType[] = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          const {likes, ...rest} = value
          return {
            ...rest,
            id: key,
            likeCount: Object.values(likes ?? {}).length,
            likeId: Object.entries(likes ?? {}).find(
              ([key, like]) => like.authorId === user?.id
            )?.[0],
          };
        }
      );

      setTitle(room.val().title)
      setQuestions(parsedQuestions);

      return ()=>{
        roomRef.off('value');
      }
      
    })
  }, [roomId, user?.id]);
  return {questions, title}
}
