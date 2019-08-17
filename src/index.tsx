import React, { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: green;
  color: #fff;
`;

interface Props {
  onClick: () => void;
  label: string;
}

const SimpleButton: FC<Props> = ({ onClick, label }) => (
  <Button onClick={onClick}>{label}</Button>
);

export default SimpleButton;
