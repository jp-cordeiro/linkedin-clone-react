import React from "react";
import InputOption from "../InputOptions";

function InputOptionsList({ inputOptionsList }) {
  return inputOptionsList.map((icon, index) => (
    <InputOption
      key={index}
      Icon={icon.Icon}
      title={icon.title}
      color={icon.color}
    />
  ));
}

export default InputOptionsList;
