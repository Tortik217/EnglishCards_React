import localforage from "localforage";

async function setToKnownStorage(newWord) {
  const existing = (await localforage.getItem('knownWords')) || [];
  
  if (!existing.includes(newWord)) {
    existing.push(newWord);
    await localforage.setItem('knownWords', existing);
  }
}

export default setToKnownStorage