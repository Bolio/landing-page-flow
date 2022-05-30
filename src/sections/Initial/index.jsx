import styled from "styled-components";

import Title from "../../components/Title";
import Text from "../../components/Texts";
import ButtonText from "../../components/Buttons";

const InitialSectionStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 32px 1fr; */
  grid-template-rows: auto 1fr;
  padding: 30px 100px 0 100px;
`;

const WrapperTitleStyled = styled.div`
  grid-column: 1 / 3;
  /* padding: 30px 100px 0 100px; */
`;

const InfoContactStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  div {
    margin-top: 100px;
    p {
      margin: 0;
    }
    p:nth-child(1) {
      padding: 20px 101px 20px 0;
    }
    p:nth-child(2) {
      padding: 20px 160px 20px 0;
    }
    button {
      margin-top: 20px;
    }
  }
`;

const ImgVideoStyled = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
  img {
    /* height: 100%; */
    object-fit: cover;
    border-radius: 300px;
    /* margin: 0 auto; */
  }
`;

const InitialSection = () => {
  return (
    <>
      {/* ROJO - 2 columns */}
      <InitialSectionStyled>
        <WrapperTitleStyled>
          <Title imgSrc="src/assets/Logo.png" altInfo="Logo-Title" />
        </WrapperTitleStyled>
        <InfoContactStyled>
          <div>
            <Text fontSize="60px" fontWeight="bolder">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </Text>
            <Text fontSize="16px">
              Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.
              Lectus quam id leo in. Aliquam sem et tortor consequat id porta
              nibh venenatis. Dui nunc mattis enim ut tellus elementum. Leo
              integer malesuada nunc vel.
            </Text>
            <ButtonText width="160px" height="40px" borderRadius="40px" status={"primary"}>
              CONTACTO
            </ButtonText>
          </div>
        </InfoContactStyled>
        <ImgVideoStyled>
          <img src="src/assets/img-video.jpg" alt="img-video" />
        </ImgVideoStyled>
      </InitialSectionStyled>
    </>
  );
};

export default InitialSection;
