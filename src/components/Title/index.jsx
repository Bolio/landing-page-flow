import styled from "styled-components";

const WrapperTitle = styled.div`
  padding: 30px 100px 0 100px;
`;

const Title = ({ imgSrc, altInfo }) => {
  return (
    <WrapperTitle>
      <img src={imgSrc} alt={altInfo} />
    </WrapperTitle>
  );
};

export default Title;
