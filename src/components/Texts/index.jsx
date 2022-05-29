import React from "react";
import styled from "styled-components";

const TextStyled = styled.p`
  /* color: green; */
  /* margin: 20px 0; */
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  color: ${(props) => props.color === "lightBlue" ? props.theme.colors.lightBlue : null};

  /* ${(props) =>
    props.status === "title" &&
    css`
      background-color: white;
      border: 2px ${(props) => props.theme.colors.lightBlue} solid;
    `} */
`;

const Text = ({ children, fontSize, fontWeight, textAlign, color }) => {
  return (
    <TextStyled
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      color={color}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
