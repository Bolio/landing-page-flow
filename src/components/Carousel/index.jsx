import styled, { css } from "styled-components";
import Text from "../Texts";
import TodayIcon from "@mui/icons-material/Today";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const GalleryStyled = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 500px;
  /* background-color: green; */

  left: -290px;
  width: calc(100% + 600px);
`;

const GalleryCellStyled = styled.div`
  display: flex;
  /* position: relative; */
  justify-content: center;
  top: 20px;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  /* background-color: lightblue; */
  /* border-style: dashed; */
  flex-wrap: wrap;
  img {
    position: relative;
    /* top: 30px; */
    width: 90%;
    height: 75%;
    /* width: 338px;
    height: 296px; */
    border-radius: 30px;
  }
  div {
    /* position: relative; */
    /* top: -30px; */
    /* background-color: red; */
    padding: 0 20px 0 20px;
    display: inline-block;
    width: 100%;
    position: relative;
    p {
      margin: 0 0 50px 0;
    }
    svg#play-arrow-icon-carousel {
      top: 15px;
      position: absolute;
      right: 20px;
    }
    div {
      /* background-color: purple; */
      /* display: inline-flex; */
      /* align-items: center; */
      padding: 0;
      width: 100%;
      /* display: inline-block; */
      bottom: 25px;
      svg#today-icon-carousel {
        position: absolute;
      }
      p {
        /* display: block;
        margin: 0 0 0 5px; */
        /* width: min-content; */
        margin: 0;
        position: absolute;
        left: 30px;
      }
      span {
        /* margin-left: 100px; */
        background: rgba(0, 0, 0, 0.08);
        padding: 5px 10px;
        border-radius: 5px;
        position: absolute;
        right: 0;
      }
      hr {
        border-top: 1px solid #bbb;
        border-radius: 5px;
        position: relative;
        top: 30px;
        width: 95%;
        margin-left: 0;
      }
    }
  }
`;

const CircularButtonStyled = styled.button`
  position: absolute;
  top: -27px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  appearance: none;
  border: none;
  box-shadow: 0 2px 25px rgba(98, 109, 117, 0.56);
  cursor: pointer;

  ${(props) =>
    props.left &&
    css`
      background-color: white;
      left: 21%;
    `}

  ${(props) =>
    props.right &&
    css`
      background-color: white;
      right: 21%;
    `}
`;

const Carousel = () => {
  return (
    <GalleryStyled>
      <GalleryCellStyled>
        <img src="src/assets/slide-img1.jpg" alt="slideImg1" />
        <div>
          <p>
            Tellus cras adipiscing enim eu turpis. Tincidunt praesent semper
          </p>
          <PlayArrowIcon
            id="play-arrow-icon-carousel"
            color="primary"
            fontSize="small"
            sx={{ fontSize: 13 }}
          />
          <div>
            <TodayIcon
              id="today-icon-carousel"
              color="primary"
              fontSize="small"
            />
            <p>Vestibulum enim in</p>
            <span>2020</span>
            <hr />
          </div>
        </div>
      </GalleryCellStyled>
      <GalleryCellStyled>
        <img src="src/assets/slide-img2.jpg" alt="slideImg2" />
      </GalleryCellStyled>
      <GalleryCellStyled>
        <img src="src/assets/slide-img3.jpg" alt="slideImg3" />
      </GalleryCellStyled>
      <GalleryCellStyled>
        <img src="src/assets/slide-img4.jpg" alt="slideImg4" />
      </GalleryCellStyled>
      <GalleryCellStyled>
        <img src="src/assets/slide-img5.jpg" alt="slideImg5" />
      </GalleryCellStyled>
      <CircularButtonStyled left>{"<"}</CircularButtonStyled>
      <CircularButtonStyled right>{">"}</CircularButtonStyled>
    </GalleryStyled>
  );
};

export default Carousel;
