import React from "react";
import styled from "styled-components";

const TextStyled = styled.p`
  /* color: green; */
  margin: 20px 0;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
`;

const Text = ({ children, fontSize, fontWeight, textAlign }) => {
  return (
    <TextStyled fontSize={fontSize} fontWeight={fontWeight} textAlign={textAlign}>
      {children}
    </TextStyled>
  );
};

export default Text;
