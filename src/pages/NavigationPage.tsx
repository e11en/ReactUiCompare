import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";
import { Navigation as AntDesignNavigation } from "frameworks/ant-design";
import { Navigation as MaterialUINavigation } from "frameworks/material-ui";

const NavigationPage = () => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(framework, {
    [Frameworks.AntDesign]: <AntDesignNavigation />,
    [Frameworks.MaterialUi]: <MaterialUINavigation />,
  });
};

export default NavigationPage;