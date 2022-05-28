import styled from "styled-components";

const LayoutStyled = styled.div`
  display: grid;
  grid-template-rows: 32px repeat(4, 60%);
  gap: 50px;
  /* margin: 30px 100px 0 100px; */
`;

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;