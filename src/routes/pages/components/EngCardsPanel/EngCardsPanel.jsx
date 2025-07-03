import Card from "../Card/Card";
import { useOutletContext } from "react-router-dom";
import "@/routes/pages/components/EngCardsPanel/EngCardsPanel.css";

function EngCardsPanel() {
  const {
    words,
    setWords,
    handleClearCache,
    clearCash,
    currentIndex,
    setCurrentIndex,
  } = useOutletContext();

  if (!words || words.length === 0) {
    return (
      <div className="wrapper d-flex flex-column align-items-center gap-4">
        <h3>🎉 Все слова выучены!</h3>
        <button onClick={clearCash} className="btn btn-primary">
          Clear Cache
        </button>
      </div>
    );
  }

  const currentWord = words[currentIndex];

  const isDisabled = currentWord.choice === "dont" ? true : false;

  function nextCard() {
    if (currentIndex + 1 < words.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const remaining = words
        .filter((word) => word.choice !== "know")
        .map((word) => ({ ...word, choice: null }));

      setWords(remaining);
      setCurrentIndex(0);
    }
  }

  function handleChoice(wordText, userChoice) {
    if (userChoice === "know") {
      setWords((prevWords) => {
        const newWords = prevWords.filter((word) => word.word !== wordText);
        setCurrentIndex((prevIndex) =>
          prevIndex >= newWords.length ? 0 : prevIndex
        );
        return newWords;
      });
    } else {
      setWords((prevWords) =>
        prevWords.map((word) =>
          word.word === wordText ? { ...word, choice: userChoice } : word
        )
      );
    }
  }

  return (
    <div className="wrapper d-flex flex-column align-items-center gap-4">
      <button onClick={handleClearCache} className="btn btn-primary">
        Clear Cache
      </button>
      <Card
        word={currentWord.word}
        translate={currentWord.translate}
        nextCard={nextCard}
        choice={currentWord.choice}
        onChoice={handleChoice}
        isDisabled={isDisabled}
      />
      {currentWord.choice === "dont" && (
        <div className="loader">
          <div></div>
        </div>
      )}

      <button
        onClick={nextCard}
        className="btn btn-primary"
        disabled={isDisabled}
      >
        Next
      </button>
    </div>
  );
}

export default EngCardsPanel;
