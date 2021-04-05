import React from 'react';
import './custom-input.scss';

export default function CustomInput({ label, ...restProps }) {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        {...restProps}
      />
      {label ? (
        <label
          className={`${
            restProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
