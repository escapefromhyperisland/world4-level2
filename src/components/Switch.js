import React, { Fragment } from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <Fragment>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && 'rgb(255, 235, 205)' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </Fragment>
  );
};

export default Switch;
