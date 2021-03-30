import { Switch, Route } from "react-router-dom";

import MainPage from "pages/MainPage";
import ButtonPage from "pages/ButtonPage";
import LayoutPage from "pages/LayoutPage";
import SurfacePage from "pages/SurfacePage";

const RoutingComponent = () => {
  return (
    <Switch>
      <Route component={MainPage} path="/" exact />
      <Route component={ButtonPage} path="/button" exact />
      <Route component={LayoutPage} path="/layout" exact />
      <Route component={SurfacePage} path="/surface" exact />
    </Switch>
  );
};

export default RoutingComponent;
