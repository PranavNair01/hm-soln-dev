import React from 'react'
import { useSelector } from 'react-redux';

function TextContainer() {
    const latest_color = useSelector((state) => { return state.color.color;});

    return (
        <div style={{
            fontWeight: "10%",
            fontSize: "50px",
            color: `${latest_color}`,
        }}>
            TextContainer
        </div>
    )
}

export default TextContainer

