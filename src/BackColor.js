// import "../public/styles.css";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

function BackColor(props) {
  var [backcolor, setColor] = useState("#fff");
  var [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div className="color-back">
      <button
        onClick={() => setShowColorPicker((showColorPicker = !showColorPicker))}
        style={{ backgroundColor: backcolor }}
      >
        {showColorPicker && (
          <SketchPicker
            color={backcolor}
            onChange={(updatedColor) => {
              setColor(updatedColor.hex);
              // props.changeBackColor(backcolor);
              props.changeBackColor(updatedColor.hex);
            }}
          />
        )}
      </button>
    </div>
  );
}

export default BackColor;
