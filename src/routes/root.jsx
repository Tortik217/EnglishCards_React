import { Outlet, useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import Header from "./pages/components/Header/Header";
import { clearCash } from "@/data/forStorage";

function Root() {
  const wordsFromLoader = useLoaderData();

  const [words, setWords] = useState(resetChoices(wordsFromLoader));
  const [currentIndex, setCurrentIndex] = useState(0);

  function resetChoices(data) {
    return data.map((word) => ({ ...word, choice: null }));
  }

  function handleClearCache() {
    clearCash();
    const resetWords = resetChoices(wordsFromLoader);
    setWords(resetWords);
    setCurrentIndex(0);
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Header words={words} setWords={setWords} />
      <div className="output">
        <Outlet
          context={{
            words,
            setWords,
            handleClearCache,
            clearCash,
            currentIndex,
            setCurrentIndex,
          }}
        />
      </div>
    </div>
  );
}

export default Root;
