import React, { FC } from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: #454545;
  color: #eee;
  box-sizing: border-box;
`;

const InputForm: FC = () => <Input type="text" />;

export default InputForm;
