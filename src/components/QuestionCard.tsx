import { ReactNode } from 'react'

import { ParsedQuestionType } from '../hooks/useRoom'
import "../styles/question-card.scss";

type QuestionCardProps = {
  children?: ReactNode,
  admin?: boolean,
} &ParsedQuestionType

// export function QuestionCard({content, author, children}:QuestionCardProps){
export function QuestionCard({content, author, children}:QuestionCardProps){
  return (
    <div className="question-card">
      <p>{content}</p>

      <footer className="question-card-footer">
        <div className="author-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div className="actions-list">
          {children}
        </div>
      </footer>
    </div>
  );
}