import React, { useState } from "react";

function useInputValidatetion(initionValue, regx = /\d/gi) {
  const [value, setValue] = useState(initionValue);

  const onChange = (e) => setValue(e.target.value);
  const validateInput = () => value.search(regx) >= 0; // return: true or false
  const validateColor = validateInput() ? "text-danger" : null;

  return { value, onChange, validateInput, validateColor };
}

export default useInputValidatetion;
