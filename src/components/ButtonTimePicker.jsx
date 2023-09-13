import React, { useState } from "react";
import { TimePicker } from "antd";
import styled from "styled-components";

const MTimePicker = styled(TimePicker)`
  & > .ant-picker-input {
    display: none;
  }
`;

const ButtonTimePicker = ({ onTimeChange, icon, tvalue }) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open) => {
    setOpen(open);
  };

  const handleChange = (value) => {
    onTimeChange(value);
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-sm w-8 h-8 flex items-center justify-center relative"
    >
      <p className="text-2xl absolute">{icon}</p>
      <MTimePicker
        open={open}
        onOpenChange={handleOpenChange}
        onChange={handleChange}
        bordered={false}
        suffixIcon={null}
        value={tvalue}
      />
    </div>
  );
};

export default ButtonTimePicker;
