import React from 'react';
import './ColorPicker.css';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { colorActions } from '../store/ColorSlice';

function ColorPicker() {

    const dispatch = useDispatch();
    const current_color = useSelector(state => state.color);
    const setColorHandle = (color) => {
        dispatch(colorActions.changeColor(color["hex"]));
        console.log(current_color);
    }

    return (
        <div className='menu'>
            <SketchPicker color={current_color}
                onChangeComplete={setColorHandle} />
        </div>
    )
}

export default ColorPicker