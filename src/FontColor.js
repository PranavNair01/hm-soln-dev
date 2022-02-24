// import "../public/styles.css";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

function FontColor(props) {
  var [fontcolor, setColor] = useState("#fff");
  var [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div className="color-back">
      <button
        onClick={() => setShowColorPicker((showColorPicker = !showColorPicker))}
        style={{ backgroundColor: fontcolor }}
      >
        {showColorPicker && (
          <SketchPicker
            color={fontcolor}
            onChange={(updatedColor) => {
              setColor(updatedColor.hex);
              props.changeFontColor(updatedColor.hex);
            }}
          />
        )}
      </button>
    </div>
  );
}

export default FontColor;
