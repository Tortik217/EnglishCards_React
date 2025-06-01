import setToKnownStorage from "@/data/forStorage";

import "./Card.css";

function Card({id, word, translate, nextCard, choice, onChoice}) {


  function handleKnowClick() {
    setToKnownStorage(word);
    onChoice(id, "know");
    nextCard();
  }

   function handleDontKnowClick() {
    onChoice(id, "dont");
    setTimeout(() => {nextCard()}, 3000)
  }

const borderClass = 
  choice === "know" ? "border-success" :
  choice === "dont" ? "border-danger" :
  "border-primary";

  return (
    <div className={`Card d-flex flex-column align-items-center gap-4 rounded-3 p-4 border ${borderClass}`}>
        <div className="word">
          <h3>{word}</h3>
        </div>
        {choice === "dont" && (
          <div className="translateWord">
            <h3>{translate}</h3>
          </div>
      )}

        <div className="buttonForm d-flex gap-2">
          <button
            className="buttonForm_true btn btn-outline-success"
            onClick={handleKnowClick}
          >
            Know
          </button>
          <button
            className="buttonForm_False btn btn-outline-danger"
            onClick={handleDontKnowClick}
          >
            Don't know
          </button>
        </div>
      </div>
  )
}

export default Card