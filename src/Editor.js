import { Link, useParams } from "react-router-dom";
import BackColor from "./BackColor";
import FontColor from "./FontColor";
import Centre from "./Centre";
import { useState } from "react";

const Editor = () => {
    const {id, opt} = useParams();

    var [backColor, setBackColor] = useState("white");
    var [fontColor, setFontColor] = useState("black");

    function backColorChange(color) {
        setBackColor(color);
    }
    function fontColorChange(color) {
        setFontColor(color);
    }

    return ( 
        <tr>
            <td className="left-column">
            <BackColor changeBackColor={backColorChange} />
            </td>
            <td className="centre-column" style={{ backgroundColor: backColor }}>
            <Centre fontColor={fontColor} />
            </td>
            <td className="right-column">
            <FontColor changeFontColor={fontColorChange} />
            </td>
        </tr>
        
     );
}
 
export default Editor;