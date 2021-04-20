import { useState, useRef } from "react";
import {
  extendTheme,
  ChakraProvider,
  Button,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import PageWrapper from "components/PageWrapperComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FootComponent";
import Content from "./ContentComponent";

const StyledButton = {
  baseStyle: {
    borderRadius: "2px",
  },
  variants: {
    primary: {
      bg: "#FF6C37",
      color: "white",
    },
  },
};

const theme = extendTheme({
  colors: {
    primary: {
      50: "#207FAB",
      100: "#115B7B",
      200: "#0A4963",
      300: "#064057",
      400: "#043C51",
      500: "#02374B",
      600: "#022E40",
      700: "#022A3A",
      800: "#012534",
      900: "#00131C",
    },
    secondary: {
      50: "#EF8F6C",
      100: "#F77E52",
      200: "#FB7545",
      300: "#FD713E",
      400: "#FE6F3B",
      500: "#FF6C37",
      600: "#8A391C",
      700: "#4F1F0E",
      800: "#321207",
      900: "#140500",
    },
  },
  components: {
    Button: StyledButton,
  },
});

export const RealLife = () => {
  const ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper ref={ref}>
        <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
        <Menu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          containerRef={ref}
        />
        <Content />
        <Footer />
      </PageWrapper>

      <LinkBox as={Button} colorScheme="secondary">
        <LinkOverlay
          href="https://github1s.com/e11en/ReactUiCompare/blob/main/src/frameworks/chakra-ui/real-life/RealLife.tsx"
          target="_blank"
          rel="noreferrer"
        >
          Look at code
        </LinkOverlay>
      </LinkBox>
    </ChakraProvider>
  );
};
