import React from "react";
import styled, { css } from "styled-components";

const ButtonTextStyled = styled.button`
  color: ${(props) => props.theme.colors.darkPurple};
  /* background-color: ${(props) => props.theme.colors.lightBlue}; */
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  border-radius: ${({ borderRadius }) => borderRadius};
  appearance: none;
  border: none;
  box-shadow: 0 2px 25px rgba(98, 109, 117, 0.56);
  cursor: pointer;
  :active {
    border: 1px inset #1d659f;
    padding: 4px 2px 2px 4px;
  }

  ${(props) =>
    props.status === "primary" &&
    css`
      background-color: ${(props) => props.theme.colors.lightBlue};
    `}
  ${(props) =>
    props.status === "secondary" &&
    css`
      background-color: white;
      border: 2px ${(props) => props.theme.colors.lightBlue} solid;
    `}
`;

const ButtonText = ({ children, width, height, borderRadius, status }) => {
  return (
    <ButtonTextStyled
      width={width}
      height={height}
      borderRadius={borderRadius}
      status={status}
    >
      {children}
    </ButtonTextStyled>
  );
};

export default ButtonText;
