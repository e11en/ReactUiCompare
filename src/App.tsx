import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import 'antd/dist/antd.css';

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
