import { setToKnownStorage } from "@/data/forStorage";

function Card({ word, translate, nextCard, choice, onChoice, isDisabled }) {
  function handleKnowClick() {
    setToKnownStorage(word);
    onChoice(word, "know");
    nextCard();
  }

  function handleDontKnowClick() {
    onChoice(word, "dont");
    setTimeout(() => nextCard(), 3000);
  }

  const borderClass =
    choice === "know"
      ? "border-success"
      : choice === "dont"
      ? "border-danger"
      : "border-primary";

  return (
    <div
      className={`Card d-flex flex-column align-items-center gap-4 rounded-3 p-4 border ${borderClass}`}
    >
      <div className="word">
        <h3>{word}</h3>
      </div>
      {choice === "dont" && (
        <div className="translateWord">
          <h3>{translate}</h3>
        </div>
      )}
      <div className="buttonForm d-flex gap-2">
        <button className="btn btn-outline-success" onClick={handleKnowClick} disabled={isDisabled}>
          Know
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={handleDontKnowClick}
        >
          Don't know
        </button>
      </div>
    </div>
  );
}

export default Card;
