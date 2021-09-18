import { ParsedQuestionType } from '../pages/Room'
import likeIcon from '../assets/images/like.svg'
import "../styles/question-card.scss";

type QuestionCardProps = ParsedQuestionType

export function QuestionCard({content, author}:QuestionCardProps){
  return (
    <div className="question-card">
      <p>{content}</p>

      <footer className="question-card-footer">
        <div className="author-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div className="actions-list">
          <div className="action like">
            <span>0</span>
            <button>
              <img src={likeIcon} alt="like" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}