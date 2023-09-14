import React, { useRef } from "react";
import Select from "react-select";

const ButtonSelect = ({
  label = "Select",
  options = [],
  value = "",
  onOptionChange,
}) => {
  const selectRef = useRef();

  const handleClick = () => {
    selectRef.current.focus();
  };

  const handleBlur = () => {
    selectRef.current.blur();
  };

  const handleChange = (selectedOption) => {
    onOptionChange(selectedOption);
  };

  return (
    <>
      <Select
        options={options}
        defaultValue={options.find((opt) => opt.value === value)}
        ref={selectRef}
        isSearchable={false}
        onChange={handleChange}
        onBlur={handleBlur}
        className="hidden"
      />
      <button onClick={handleClick} className="text-black">
        {label}
      </button>
    </>
  );
};

export default ButtonSelect;
