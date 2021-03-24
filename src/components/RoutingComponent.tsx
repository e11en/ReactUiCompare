import { Switch, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ButtonPage from "../pages/ButtonPage";

const RoutingComponent = () => {
  return (
    <Switch>
      <Route component={MainPage} path="/" exact />
      <Route component={ButtonPage} path="/button" exact />
    </Switch>
  );
};

export default RoutingComponent;
