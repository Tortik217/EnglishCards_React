import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";

export default function WordsList() {

  const wordsFromLoader = useLoaderData()
  const [words, setWords] = useState(wordsFromLoader);

  return (
    <table className=" table table-info">
      <thead>
        <tr>
          <th>Word</th>
          <th>Translate</th>
          <th>Learned</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word, index) => (
          <tr key={index}>
            <td>{word.word}</td>
            <td>{word.translate}</td>
            <td>{word.choice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}