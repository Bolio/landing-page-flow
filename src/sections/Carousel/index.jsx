import styled from "styled-components";
import Carousel from "../../components/Carousel";
import Text from "../../components/Texts";

const CarouselSectionStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
`;

const CarouselSection = () => {
  return (
    <>
      <CarouselSectionStyled>
        <Text fontSize="22px" fontWeight="bolder" textAlign="center">
          Vel sagittis faucibus neque
        </Text>
        <Carousel />
      </CarouselSectionStyled>
    </>
  );
};

export default CarouselSection;
