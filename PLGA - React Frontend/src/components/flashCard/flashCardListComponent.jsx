import React, { useState } from 'react';
import FlashCard from './flashCardComponent';
import './flashCard.css';

function FlashCardList({ flashcards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleAnswerClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }

    return (
        <div className='flashcard-list'>
            {flashcards.length > 0 && (
                <FlashCard
                key={currentIndex}
                flashcard={flashcards[currentIndex]}
                onAnswerClick={handleAnswerClick}
                />
            )}
        </div>
    );
}

export default FlashCardList;