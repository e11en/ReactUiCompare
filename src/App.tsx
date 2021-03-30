import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import FrameworkContext, { Frameworks } from "./state/FrameworkContext";
import Header from "./components/HeaderComponent";
import Menu from "./components/MenuComponent";
import Routing from "./components/RoutingComponent";
import { useState } from "react";

const Content = styled.div`
  padding: 1em;
  margin-left: 10em;
`;

const AppComponent = () => {
  const [framework, setFramework] = useState(Frameworks.AntDesign);

  return (
    <FrameworkContext.Provider value={framework}>
      <BrowserRouter>
        <Header onFrameworkChange={setFramework} />
        <Menu />
        <Content>
          <Routing />
        </Content>
      </BrowserRouter>
    </FrameworkContext.Provider>
  );
};

export default AppComponent;
