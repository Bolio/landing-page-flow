import styled from "styled-components";

const LayoutStyled = styled.div`
  display: grid;
  /* grid-template-rows: 32px repeat(4, 60%); */
  /* grid-template-rows: 32px 820px 500px 800px 800px; */
  /* grid-template-rows: 1fr repeat(4, 10fr); */
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 20px;
  /* margin: 30px 100px 0 100px; */
`;

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
