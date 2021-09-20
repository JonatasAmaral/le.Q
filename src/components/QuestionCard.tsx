import { ReactNode, HTMLAttributes} from 'react'
import classnames from 'classnames'

import { ParsedQuestionType } from '../hooks/useRoom'
import "../styles/question-card.scss";

type QuestionCardProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode,
  admin?: boolean,
} &ParsedQuestionType

// export function QuestionCard({content, author, children}:QuestionCardProps){
export function QuestionCard({
  content,
  author,
  isAnswered = false,
  children,
}: QuestionCardProps) {
  return (
    <div
      className={classnames("question-card", {
        answered: isAnswered,
      })}
    >
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