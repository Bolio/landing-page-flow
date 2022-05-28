import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled/themes/theme";
import Layout from "./components/Layout";
import Title from "./components/Title";
import InitialSection from "./sections/Initial";
import CarouselSection from "./sections/Carousel";

function App() {
  return (
    // <div className="App">
    <ThemeProvider theme={theme}>
      <Layout>
        <Title imgSrc="src/assets/Logo.png" altInfo="Logo-Title" />
        <InitialSection />
        <CarouselSection />
      </Layout>
    </ThemeProvider>
    // </div>
  );
}

export default App;
