import React, { useState } from "react";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

function EndCardsPanel() {
  const wordsFromLoader = useLoaderData();
  const [words, setWords] = useState(wordsFromLoader);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!words || words.length === 0) {
    return <h3>🎉 Все слова выучены!</h3>;
  }

  const currentWord = words[currentIndex];

  function nextCard() {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < words.length ? prevIndex + 1 : 0
    );
  }

  function handleChoice(wordText, choice) {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.word === wordText ? { ...word, choice } : word
      )
    );
  }

  return (
    <div className="wrapper d-flex flex-column align-items-center gap-4">
      <Card
        id={currentWord.id}
        word={currentWord.word}
        translate={currentWord.translate}
        nextCard={nextCard}
        choice={currentWord.choice}
        onChoice={handleChoice}
      />
      <button onClick={nextCard} className="btn btn-primary">
        Next
      </button>
    </div>
  );
}

export default EndCardsPanel;
