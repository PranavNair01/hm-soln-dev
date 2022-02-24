// import "../public/styles.css";
import React, { useState } from "react";
import Draggable from "react-draggable";
// import { EditText } from "react-edit-text";

// function Centre(props) {
//   return (
//     <Draggable bounds="parent">
//       <div className="drag-area" style={{ color: props.fontColor }}>
//         <EditText defaultValue="Text here" />
//       </div>
//     </Draggable>
//   );
// }

function Centre(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("text here");

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function escapeEdit(e) {
    // e.prevent.default();
    if (e.key === "Enter") {
      setIsEditing(false);
      console.log(e.key);
    }
  }

  var [textSize, setTextSize] = useState(15);
  function increaseTextSize() {
    setTextSize(textSize + 2);
    console.log(textSize);
  }
  function decreaseTextSize() {
    setTextSize(textSize - 2);
    console.log(textSize);
  }
  return (
    <Draggable bounds="parent">
      <div className="drag-area" style={{ color: props.fontColor }}>
        {isEditing ? (
          <form>
            <input
              type="text"
              onChange={handleInputChange}
              defaultValue={text}
              onKeyPress={escapeEdit}
            />
          </form>
        ) : (
          <h1
            style={{ fontSize: textSize }}
            onDoubleClick={() => setIsEditing(true)}
          >
            {text}
          </h1>
        )}
        <button onClick={increaseTextSize}>+</button>
        <button onClick={decreaseTextSize}>-</button>
      </div>
    </Draggable>
  );
}

export default Centre;
