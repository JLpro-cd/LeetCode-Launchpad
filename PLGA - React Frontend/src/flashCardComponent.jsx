import react, {useState} from 'react';
import './flashCard.css';

function FlashCard({ flashcard }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="flashcard" onClick={handleClick}>
        {showAnswer ? flashcard.answer : flashcard.question}
        </div>
    );
}

export default FlashCard;