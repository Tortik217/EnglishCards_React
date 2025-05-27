import { useState } from "react";

function Card({word, translate}) {

  const [isknown, setIsKnown] = useState(false);

  function changeKnown(param) {
    setIsKnown(param)
  }

  return (
    <div className="Card d-flex flex-column align-items-center gap-4 border border-primary rounded-3 p-4">
        <div className="word">
          <h3>{word}</h3>
        </div>
        {isknown && (
          <div className="translateWord">
            <h3>{translate}</h3>
          </div>
        )}

        <div className="buttonForm d-flex gap-2">
          <button
            className="buttonForm_true btn btn-outline-success"
            onClick={() => changeKnown(false)}
          >
            Know
          </button>
          <button
            className="buttonForm_False btn btn-outline-danger"
            onClick={() => changeKnown(true)}
          >
            Don't know
          </button>
        </div>
      </div>
  )
}

export default Card