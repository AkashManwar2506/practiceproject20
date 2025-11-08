import { useState } from "react";
import "./style.css";
import accordionItems from "./accordianData";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleOneAccord = (id) => {
    if (id === selected) setSelected(null);
    else setSelected(id);
  };

  const handleMultipleAcord = (id) => {
    const cpyMultiple = [...multiple];
    const index = cpyMultiple.indexOf(id);
    if (index !== -1) cpyMultiple.splice(index, 1);
    else {
      cpyMultiple.push(id);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div>
      <button onClick={() => setEnableMultiselection(!enableMultiselection)}>
        Enable multiselection
      </button>
      {accordionItems && accordionItems.length ? (
        accordionItems.map((item) => (
          <div
            className="cardAccord"
            key={item.id}
            onClick={() => {
              enableMultiselection
                ? handleMultipleAcord(item.id)
                : handleOneAccord(item.id);
            }}
          >
            <div className="question">
              <h3>{item.question}</h3>
              {!enableMultiselection ? (
                selected === item.id ? (
                  <span>-</span>
                ) : (
                  <span>+</span>
                )
              ) : multiple.indexOf(item.id) !== -1 ? (
                <span>-</span>
              ) : (
                <span>+</span>
              )}
            </div>
            {!enableMultiselection ? (
              selected === item.id ? (
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              ) : (
                <></>
              )
            ) : multiple.indexOf(item.id) !== -1 ? (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default Accordion;
