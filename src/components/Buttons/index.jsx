import React from "react";
import styled from "styled-components";

const ButtonTextStyled = styled.button`
  color: ${(props) => props.theme.colors.darkPurple};
  background-color: ${(props) => props.theme.colors.lightBlue};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  border-radius: ${({ borderRadius }) => borderRadius};
  appearance: none;
  border: none;
  box-shadow: 0 2px 25px rgba(98, 109, 117, 0.56);
  cursor: pointer;
`;

const ButtonText = ({ children, width, height, borderRadius }) => {
  return (
    <ButtonTextStyled width={width} height={height} borderRadius={borderRadius}>
      {children}
    </ButtonTextStyled>
  );
};

export default ButtonText;
