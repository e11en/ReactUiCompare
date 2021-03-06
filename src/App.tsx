import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";

import FrameworkContext, { Frameworks } from "./state/FrameworkContext";
import Header from "./components/HeaderComponent";
import Menu from "./components/MenuComponent";
import Routing from "./components/RoutingComponent";

const Content = styled.div`
  padding: 1em;
  margin-left: 10em;

  @media (max-width: 540px) {
    margin-left: 1em;
  }
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d78b9c",
    },
    secondary: {
      main: "#46ACDB",
    },
  },
});

const AppComponent = () => {
  const matches = useMediaQuery("(max-width:540px)");
  const [framework, setFramework] = useState(Frameworks.AntDesign);
  const [openMenu, setOpenMenu] = useState(matches);

  useEffect(() => {
    const storedFramework = localStorage.getItem("framework");
    if (storedFramework !== null) setFramework(storedFramework);
  }, []);

  const onFrameworkChange = (framework: string) => {
    setFramework(framework);
    localStorage.setItem("framework", framework);
  };

  return (
    <FrameworkContext.Provider value={framework}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header onMenuOpen={() => setOpenMenu(true)} />
          <Menu
            onFrameworkChange={onFrameworkChange}
            open={openMenu}
            onClose={() => setOpenMenu(false)}
          />
        </ThemeProvider>
        <Content>
          <Routing />
        </Content>
      </BrowserRouter>
    </FrameworkContext.Provider>
  );
};

export default AppComponent;
