import { useOutletContext } from "react-router-dom";

export default function WordsList() {
  const { words } = useOutletContext();

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
        {words.map(({ id, word, translate, choice }) => (
          <tr key={id}>
            <td>{word}</td>
            <td>{translate}</td>
            <td>
              {choice === "know"
                ? "✅ Know"
                : choice === "dont"
                ? "❌ Don't Know"
                : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
