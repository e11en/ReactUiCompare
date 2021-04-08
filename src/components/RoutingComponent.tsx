import { Switch, Route } from "react-router-dom";

import MainPage from "pages/MainPage";
import ButtonPage from "pages/ButtonPage";
import LayoutPage from "pages/LayoutPage";
import SurfacePage from "pages/SurfacePage";
import NavigationPage from "pages/NavigationPage";
import ThemingPage from "pages/ThemingPage";
import InputPage from "pages/InputPage";
import NotificationPage from "pages/NotificationPage";
import DataPage from "pages/DataPage";

const RoutingComponent = () => {
  return (
    <Switch>
      <Route component={MainPage} path="/" exact />
      <Route component={ButtonPage} path="/button" exact />
      <Route component={LayoutPage} path="/layout" exact />
      <Route component={SurfacePage} path="/surface" exact />
      <Route component={NavigationPage} path="/navigation" exact />
      <Route component={ThemingPage} path="/theming" exact />
      <Route component={InputPage} path="/input" exact />
      <Route component={NotificationPage} path="/notifications" exact />
      <Route component={DataPage} path="/data" exact />
      <Route render={() => <span>Not available</span>} />
    </Switch>
  );
};

export default RoutingComponent;
