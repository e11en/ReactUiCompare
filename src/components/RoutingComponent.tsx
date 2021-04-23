import { Switch, Route } from "react-router-dom";

import MainPage from "pages/MainPage";
import ComponentListPage from "pages/ComponentListPage";
import Page from "pages/Page";

const RoutingComponent = () => {
  return (
    <Switch>
      <Route component={MainPage} path="/" exact />
      <Route component={ComponentListPage} path="/component-list" exact />
      <Route
        component={(props: any) => <Page type="button" {...props} />}
        path="/button"
        exact
      />
      <Route
        component={(props: any) => <Page type="layout" {...props} />}
        path="/layout"
        exact
      />
      <Route
        component={(props: any) => <Page type="surface" {...props} />}
        path="/surface"
        exact
      />
      <Route
        component={(props: any) => <Page type="navigation" {...props} />}
        path="/navigation"
        exact
      />
      <Route
        component={(props: any) => <Page type="theming" {...props} />}
        path="/theming"
        exact
      />
      <Route
        component={(props: any) => <Page type="input" {...props} />}
        path="/input"
        exact
      />
      <Route
        component={(props: any) => <Page type="notification" {...props} />}
        path="/notification"
        exact
      />
      <Route
        component={(props: any) => <Page type="data" {...props} />}
        path="/data"
        exact
      />
      <Route
        component={(props: any) => <Page type="realLife" {...props} />}
        path="/real-life"
        exact
      />
      <Route
        component={(props: any) => <Page type="conclusion" {...props} />}
        path="/conclusion"
        exact
      />

      <Route render={() => <h2>Your lack of routing concerns me..</h2>} />
    </Switch>
  );
};

export default RoutingComponent;
