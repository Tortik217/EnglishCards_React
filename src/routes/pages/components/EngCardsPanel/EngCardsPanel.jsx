import Card from "../Card/Card";
import words from "@/data/Words";

function EndCardsPanelPanel() {

  return (
    <div className="wrapper d-flex gap-4 flex-wrap">
      {words.map((word) => {
        return <Card key={word.id} word={word.word} translate={word.translate}/>
      })}
    </div>
  );
}

export default EndCardsPanelPanel;
