import styled from "styled-components";
import CallMadeIcon from "@mui/icons-material/CallMade";

import Title from "../../components/Title";
import Text from "../../components/Texts";
import ButtonText from "../../components/Buttons";

const InitialSectionStyled = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: auto auto;
  /* grid-template-rows: 32px 1fr; */
  grid-template-rows: auto 1fr;
  padding: 30px 100px 0 100px;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 30px 30px 0 30px;
  }
`;

const WrapperTitleStyled = styled.div`
  grid-column: 1 / 3;
  /* padding: 30px 100px 0 100px; */
  @media screen and (max-width: 425px) {
    position: absolute;
    top: 30px;
  }
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
      padding: 20px 0px 20px 0;
    }
    p:nth-child(2) {
      padding: 20px 0px 20px 0;
    }
    button {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        margin-left: 5px;
      }
    }
    img {
      position: absolute;
      left: 60%;
      z-index: 1;
    }
  }

  @media screen and (max-width: 425px) {
    text-align: center;
    div {
      margin-top: 30px;
      p:nth-child(2) {
        font-size: 1.5rem;
      }
      img {
        display: none;
      }
    }
  }
`;

const ImgVideoStyled = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  text-align: center;
  img:nth-child(1) {
    /* height: 100%; */
    /* object-fit: cover; */
    border-radius: 300px;
    /* margin: 0 auto; */
    max-width: 100%;
    height: auto;
  }
  img:nth-child(2) {
    position: absolute;
    left: 35%;
    top: 35%;
  }

  @media screen and (max-width: 425px) {
    img:nth-child(1) {
      margin-top: 50px;
      object-fit: none;
      width: 500px;
      height: 400px;
      border-radius: 45%;
    }
    img:nth-child(2) {
      position: absolute;
      left: 29%;
    }
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
            <ButtonText
              width="160px"
              height="40px"
              borderRadius="40px"
              status={"primary"}
            >
              CONTACTO
              <CallMadeIcon fontSize="small" />
            </ButtonText>
            <img src="src/assets/mano-ec.png" alt="btn-play" />
          </div>
        </InfoContactStyled>
        <ImgVideoStyled>
          <img src="src/assets/img-video.jpg" alt="img-video" />
          <img src="src/assets/btn-play.png" alt="btn-play" />
        </ImgVideoStyled>
      </InitialSectionStyled>
    </>
  );
};

export default InitialSection;
