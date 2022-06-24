import React from "react";

function ButtonNew(labelname) {
  return (
    <div
      data-testid="button"
      className="buttonNormal"
      style={{ backgroundColor: labelname.color }}
    >
      {labelname.text}
    </div>
  );
}
export default ButtonNew;
