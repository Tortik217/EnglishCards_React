import localforage from "localforage";
import words from "./Words";

export async function setToKnownStorage(word) {
  const existing = (await localforage.getItem("knownWords")) || [];

  if (!existing.includes(word)) {
    existing.push(word);
    await localforage.setItem("knownWords", existing);
  }
}

export async function getCards() {
  const knownWords = (await localforage.getItem("knownWords")) || [];
  return words.filter((w) => !knownWords.includes(w.word));
}


  export async  function clearCash() {
    return localforage.clear()
  }