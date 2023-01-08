import React from "react";
import styled from "styled-components";

export const InputStyle = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
`;

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <InputStyle
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;