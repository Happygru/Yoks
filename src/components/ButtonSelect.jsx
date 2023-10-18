import React, { useRef, useState } from "react";
import Select from "react-select";

export default function ButtonSelect({
  label = "Select...",
  options = [],
  buttonValue = "",
  onOptionChange,
}) {
  const selectRef = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleChange = (selectedOption) => {
    onOptionChange(selectedOption);
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className="cursor-pointer rounded-sm w-8 h-8 flex items-center justify-center relative"
      >
        <p className="text-2xl">{label}</p>
      </div>
      {showPopup && (
        <div className="absolute z-[1000] top-[-2px] w-[380px] left-[50px]">
          <Select
            options={options}
            defaultValue={options.find((opt) => opt.value === buttonValue)}
            ref={selectRef}
            isSearchable={true}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
