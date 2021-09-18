import { ParsedQuestionType } from '../hooks/useRoom'
import "../styles/question-card.scss";

import likeIcon from '../assets/images/like.svg'
import checkIcon from '../assets/images/check.svg'
import answerIcon from '../assets/images/answer.svg'
import deleteIcon from '../assets/images/delete.svg'

type QuestionCardProps = {
  admin?: boolean;
} &ParsedQuestionType

export function QuestionCard({content, author, admin}:QuestionCardProps){
  return (
    <div className="question-card">
      <p>{content}</p>

      <footer className="question-card-footer">
        <div className="author-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div className="actions-list">
          {admin? (
            <>
            <div className="action check">
              <button>
                <img src={checkIcon} alt="marcar como respondida" />
              </button>
            </div>
            <div className="action answer">
              <button>
                <img src={answerIcon} alt="marcar como respondendo" />
              </button>
            </div>
            <div className="action delete">
              <button>
                <img src={deleteIcon} alt="delete" />
              </button>
            </div>
            </>
          ): ( 
            <div className="action like">
              <span>0</span>
              <button>
                <img src={likeIcon} alt="like" />
              </button>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}