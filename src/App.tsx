import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import FrameworkContext from "./state/FrameworkContext";
import Header from "./components/HeaderComponent";
import Menu from "./components/MenuComponent";
import Routing from "./components/RoutingComponent";
import { useState } from "react";

const Content = styled.div`
  margin-left: 10em;
`;

const AppComponent = () => {
  const [framework, setFramework] = useState("material-ui");

  return (
    <BrowserRouter>
      <FrameworkContext.Provider value={framework}>
        <Header onFrameworkChange={setFramework} />
        <Menu />
        <Content>
          <Routing />
        </Content>
      </FrameworkContext.Provider>
    </BrowserRouter>
  );
};

export default AppComponent;
