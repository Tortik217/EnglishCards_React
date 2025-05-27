import React, { useState } from "react";
import Card from "../Card/Card";
import words from "@/data/Words";

function EndCardsPanelPanel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < words.length ? prevIndex + 1 : 0
    );
  };

  const currentWord = words[currentIndex];

  return (
    <div className="wrapper d-flex flex-column align-items-center gap-4">
      <Card word={currentWord.word} translate={currentWord.translate} />
      <button onClick={nextCard} className="btn btn-primary">
        Next
      </button>
    </div>
  );
}

export default EndCardsPanelPanel;
