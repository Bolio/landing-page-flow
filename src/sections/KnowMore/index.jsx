import styled from "styled-components";
import Text from "../../components/Texts";
import ButtonText from "../../components/Buttons";

const KnowMoreSectionStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60%;
  /* padding: 30px 100px 0 100px; */
`;

const InfoKnowMoreStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  div {
    margin-top: 100px;
    p {
      margin: 0;
    }
    p:nth-child(1) {
      padding: 20px 160px 0 0;
      letter-spacing: 3px;
    }
    p:nth-child(2) {
      padding: 20px 101px 20px 0;
    }
    p:nth-child(3) {
      padding: 20px 160px 20px 0;
    }
    button {
      margin-top: 20px;
    }
  }
`;

const ImgStyled = styled.div`
  width: 100%;
  height: 100%;
  /* height: fit-content; */
  text-align: center;
  /* display: flex; */
  img {
    height: 100%;
    margin: 0 auto;
  }
`;

const WrapperButtonsStyled = styled.div`
  display: flex;
  width: 45%;
  margin: 0 !important;
  justify-content: space-between;
  /* display: flex; */
  /* p {
    height: 100%;
    margin: 0 auto;
  } */
`;

const KnowMoreSection = () => {
  return (
    <>
      {/* ROJO - 2 columns */}
      <KnowMoreSectionStyled>
        <ImgStyled>
          <img src="src/assets/img-sect2.png" alt="rocket-img" />
        </ImgStyled>
        <InfoKnowMoreStyled>
          <div>
            <Text fontSize="10px" fontWeight="medium" color="lightBlue">
              OVERLINE
            </Text>
            <Text fontSize="60px" fontWeight="bolder">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </Text>
            <Text fontSize="16px">
              Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.
              Lectus quam id leo in. Aliquam sem et tortor consequat id porta
              nibh venenatis. Dui nunc mattis enim ut tellus elementum. Leo
              integer malesuada nunc vel.
              <br /> <br /> Dui nunc mattis enim ut tellus elementum. Leo
              integer malesuada nunc vel.
              <br /> <br />
              Congue mauris rhoncus aenean vel elit scelerisque mauris. Proin
              sagittis nisl rhoncus mattis rhoncus urna neque viverra. Vitae
              congue mauris rhoncus aenean vel elit scelerisque mauris.
            </Text>

            <WrapperButtonsStyled>
              <ButtonText
                status={"primary"}
                width="160px"
                height="40px"
                borderRadius="40px"
              >
                COMENZAR
              </ButtonText>
              <ButtonText
                status={"secondary"}
                width="160px"
                height="40px"
                borderRadius="40px"
              >
                CONOCER MÁS
              </ButtonText>
            </WrapperButtonsStyled>
          </div>
        </InfoKnowMoreStyled>
      </KnowMoreSectionStyled>
    </>
  );
};

export default KnowMoreSection;
