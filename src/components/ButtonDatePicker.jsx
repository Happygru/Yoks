import React, { useState } from "react";
import { DatePicker } from "antd";
import styled from "styled-components";

const MDatePicker = styled(DatePicker)`
  & > .ant-picker-input {
    display: none;
  }
`;

const ButtonDatePicker = ({ onDateChange, icon, dvalue }) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open) => {
    setOpen(open);
  };

  const handleChange = (value) => {
    onDateChange(value);
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
      <MDatePicker
        open={open}
        onOpenChange={handleOpenChange}
        onChange={handleChange}
        bordered={false}
        suffixIcon={null}
        value={dvalue}
      />
    </div>
  );
};

export default ButtonDatePicker;
