import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Text from "../../components/Texts";
import ButtonText from "../../components/Buttons";

const FooterSectionStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  /* padding: 30px 100px 0 100px; */
  /* background-color: red; */
`;

const ContainerFooterStyled = styled.footer`
  width: 100%;
  padding: 50px 100px 0 100px;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 350px 100px 0px 0px;

  @media screen and (max-width: 425px) {
    padding: 50px 0 0 0;
  }
`;

const GridContainerFooterStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr 2fr 70px;
  /* background-color: green; */
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

const InitialInfoFooterStyled = styled.div`
  /* background-color: orange; */
  grid-column: 1 /3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 100px 550px 20px 550px; */
  p {
    width: 40%;
    margin: 16px 0;
  }
`;

const SearchFooterStyled = styled.div`
  /* background-color: purple; */
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 /3;
  /* padding: 20px 550px 0 550px; */
  @media screen and (max-width: 425px) {
    flex-direction: column;
    input {
      margin: 0;
    }
    button {
      margin-top: 20px;
      width: 300px;
    }
  }
`;

const SocialNetworksFooterStyled = styled.div`
  width: 100%;
  padding-left: 100px;
  /* background-color: pink; */
  img {
    margin-bottom: 20px;
  }
  p {
    width: 30%;
    margin-bottom: 30px;
  }
  div#container-social-network-icons {
    display: flex;
    width: 150px;
    justify-content: space-between;
    svg {
      color: ${(props) => props.theme.colors.lightBlue};
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 0;
    img {
      width: fit-content;
      margin-top: 20px;
    }
    div#container-social-network-icons {
      width: 50%;
      justify-content: space-evenly;
    }
  }
`;

const InformationContactFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 80px 20px 100px;
  /* background-color: aquamarine; */
  div {
    display: inline-block;
    p {
      color: white;
      :nth-child(1) {
        font-size: 1rem;
      }
      :nth-child(n + 2) {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 425px) {
    padding: 0;
    text-align: center;
  }
`;

const CopyrightReservedFooterStyled = styled.div`
  grid-column: 1 /3;
  width: 100%;
  /* background-color: yellow; */
  padding: 0;
  @media screen and (max-width: 425px) {
    p {
      margin-top: 15px;
    }
  }
`;

const LinkSocialNetworksStyled = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #c0c0c0;
  border-radius: 50%;
`;

const SearchInputStyled = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 50px;
  padding-left: 20px;
  background-color: transparent;
  border: 1px white solid;
  margin-right: 20px;
`;

const FooterSection = () => {
  return (
    <>
      <FooterSectionStyled>
        <ContainerFooterStyled>
          <GridContainerFooterStyled>
            <InitialInfoFooterStyled>
              <Text
                fontSize="2rem"
                fontWeight="bolder"
                textAlign="center"
                color="white"
              >
                Porttitor imperdiet congue eu vel scelerisque quis enim, egestas
                sed ut.
              </Text>
              <Text
                fontSize="1rem"
                fontWeight="bolder"
                textAlign="center"
                color="white"
              >
                Ut elementum pellentesque tellus ornare a pellentesque.
                Sollicitudin in orci proin et mauris neque. Habitant sit vel
                malesuada eros.
              </Text>
            </InitialInfoFooterStyled>

            <SearchFooterStyled>
              <SearchInputStyled
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ButtonText
                status={"primary"}
                width="160px"
                height="40px"
                borderRadius="40px"
              >
                SUSCRIBIRSE
              </ButtonText>
            </SearchFooterStyled>

            <SocialNetworksFooterStyled>
              <img src="src/assets/Logo-1.png" alt="footer-img" />
              <Text fontSize="0.9rem" fontWeight="bolder" color="white">
                Elit et sed mauris, eu scelerisque id. Viverra dui diam ultrices
                malesuada scelerisque.
              </Text>

              <div id="container-social-network-icons">
                <LinkSocialNetworksStyled>
                  <a href="https://www.fcebook.com/">
                    <FacebookIcon />
                  </a>
                </LinkSocialNetworksStyled>

                <LinkSocialNetworksStyled>
                  <a href="https://twitter.com/">
                    <TwitterIcon />
                  </a>
                </LinkSocialNetworksStyled>

                <LinkSocialNetworksStyled>
                  <a href="https://www.linkedin.com/feed/">
                    <LinkedInIcon />
                  </a>
                </LinkSocialNetworksStyled>
              </div>
            </SocialNetworksFooterStyled>

            <InformationContactFooterStyled>
              <div>
                <Text fontSize="16px" fontWeight="bolder">
                  Ubicación
                </Text>
                <Text fontSize="12px">América</Text>
                <Text fontSize="12px">Asia</Text>
                <Text fontSize="12px">Europa</Text>
              </div>
              <div>
                <Text fontSize="16px" fontWeight="bolder">
                  Contacto
                </Text>
                <Text fontSize="12px">Nosotros</Text>
                <Text fontSize="12px">Equipo</Text>
                <Text fontSize="12px">Historia</Text>
              </div>
              <div>
                <Text fontSize="16px" fontWeight="bolder">
                  Legales
                </Text>
                <Text fontSize="12px">Política de Privacidad</Text>
                <Text fontSize="12px">Términos y Condiciones</Text>
                <Text fontSize="12px">Responsiva</Text>
              </div>
            </InformationContactFooterStyled>

            <CopyrightReservedFooterStyled>
              <Text
                fontSize="0.8rem"
                fontWeight="bolder"
                textAlign="center"
                color="white"
              >
                2022 Flow® los derechos reservados
              </Text>
            </CopyrightReservedFooterStyled>
          </GridContainerFooterStyled>
        </ContainerFooterStyled>
      </FooterSectionStyled>
    </>
  );
};

export default FooterSection;
