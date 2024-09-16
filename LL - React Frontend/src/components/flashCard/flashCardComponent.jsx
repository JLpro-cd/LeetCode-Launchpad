import React, {useState} from 'react';
import './flashCard.css';

function FlashCard({ flashcard, onAnswerClick }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        if (showAnswer) {
            onAnswerClick();
        } else {
            setShowAnswer(true);
        }
    };

    return (
        <div className="flashcard" onClick={handleClick}>
        {showAnswer ? flashcard.answer : flashcard.question}
        </div>
    );
}

export default FlashCard;