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
  background-color: red;
`;

const ContainerFooterStyled = styled.footer`
  width: 100%;
  padding: 0 100px 0 100px;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 400px 100px 0px 0px;
`;

const GridContainerFooterStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr 2fr 1fr;
  background-color: green;
`;

const InitialInfoFooterStyled = styled.div`
  background-color: orange;
  grid-column: 1 /3;
  padding: 100px 550px 20px 550px;
`;

const SearchFooterStyled = styled.div`
  background-color: purple;
  grid-column: 1 /3;
  padding: 20px 550px 0 550px;
  text-align: center;
`;

const SocialNetworksFooterStyled = styled.div`
  width: 100%;
  background-color: pink;
`;

const InformationContactFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 80px 20px 80px;
  background-color: aquamarine;
  div {
    display: inline-block;
  }
`;

const CopyrightReservedFooterStyled = styled.div`
  grid-column: 1 /3;
  width: 100%;
  background-color: yellow;
  padding: 0;
`;

const LinkSocialNetworksStyled = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: white;
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
              <Text fontSize="22px" fontWeight="bolder" textAlign="center">
                Porttitor imperdiet congue eu vel scelerisque quis enim, egestas
                sed ut.
              </Text>
              <Text fontSize="12px" fontWeight="bolder" textAlign="center">
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
              <Text fontSize="12px" fontWeight="bolder">
                Elit et sed mauris, eu scelerisque id. Viverra dui diam ultrices
                malesuada scelerisque.
              </Text>

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
              <Text fontSize="12px" fontWeight="bolder" textAlign="center">
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
