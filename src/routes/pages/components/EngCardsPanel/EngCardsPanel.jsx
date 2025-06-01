import React, { useState } from "react";
import Card from "../Card/Card";
import wordsData from "@/data/Words";

function EndCardsPanelPanel() {

  const [words, setWords] = useState(wordsData);
  const [currentIndex, setCurrentIndex] = useState(0);

    const currentWord = words[currentIndex];

  function nextCard() {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < words.length ? prevIndex + 1 : 0
    );
  };

  function handleChoice(id, choice) {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === id ? { ...word, choice } : word
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

export default EndCardsPanelPanel;
