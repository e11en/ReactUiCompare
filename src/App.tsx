import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import FrameworkContext, { Frameworks } from "./state/FrameworkContext";
import Header from "./components/HeaderComponent";
import Menu from "./components/MenuComponent";
import Routing from "./components/RoutingComponent";
import { useEffect, useState } from "react";

const Content = styled.div`
  padding: 1em;
  margin-left: 10em;
`;

const AppComponent = () => {
  const [framework, setFramework] = useState(Frameworks.AntDesign);

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
        <Header />
        <Menu onFrameworkChange={onFrameworkChange} />
        <Content>
          <Routing />
        </Content>
      </BrowserRouter>
    </FrameworkContext.Provider>
  );
};

export default AppComponent;
