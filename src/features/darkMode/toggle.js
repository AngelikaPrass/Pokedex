import React from 'react';
import "./darkModeToggle.css"
const Toggle = ({ checked, onChange }) => (
    <span className="toggle-control">
        <label className="switch">
    <input type="checkbox"
         checked={checked}
         onChange={onChange} />
    <span className="slider round"></span>
    </label></span>
);

export default Toggle;
