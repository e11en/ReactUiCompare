import { useState } from "react";
import { createMuiTheme, ThemeProvider, Button } from "@material-ui/core";

import PageWrapper from "components/PageWrapperComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FootComponent";
import Content from "./ContentComponent";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#023A4F",
    },
    secondary: {
      main: "#FF6C37",
      contrastText: "#FFF",
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: "2px",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "2px",
      },
    },
  },
});

export const RealLife = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <PageWrapper id="page-wrapper">
        <ThemeProvider theme={theme}>
          <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
          <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
          <Content />
          <Footer />
        </ThemeProvider>
      </PageWrapper>

      <Button
        variant="contained"
        color="secondary"
        component="a"
        href="https://github1s.com/e11en/ReactUiCompare/blob/main/src/frameworks/material-ui/RealLife.tsx"
        target="_blank"
        rel="noreferrer"
      >
        Look at code
      </Button>
    </>
  );
};
