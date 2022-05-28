import styled from "styled-components";
import Text from "../Texts";
import TodayIcon from "@mui/icons-material/Today";

const GalleryStyled = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  background-color: green;
`;

const GalleryCellStyled = styled.div`
  display: flex;
  /* position: relative; */
  justify-content: center;
  top: 20px;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  background-color: lightblue;
  border-style: dashed;
  flex-wrap: wrap;
  img {
    position: relative;
    top: 30px;
    width: 90%;
    height: 60%;
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
    div {
      /* background-color: purple; */
      /* display: inline-flex; */
      /* align-items: center; */
      padding: 0;
      width: 100%;
      display: inline-block;
      svg {
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
        background: lightgray;
        padding: 5px 10px;
        border-radius: 10px;
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

const Carousel = () => {
  return (
    <GalleryStyled>
      <GalleryCellStyled>
        <img src="src/assets/slide-img1.jpg" alt="slideImg1" />
        <div>
          <p>
            Tellus cras adipiscing enim eu turpis. Tincidunt praesent semper
          </p>
          <div>
            <TodayIcon />
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
    </GalleryStyled>
  );
};

export default Carousel;
