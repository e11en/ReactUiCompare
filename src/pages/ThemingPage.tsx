import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";
//import { Theming as AntDesignTheming } from "frameworks/ant-design";
import { Theming as MaterialUITheming } from "frameworks/material-ui";

const ThemingPage = () => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(framework, {
    //[Frameworks.AntDesign]: <AntDesignSurface />,
    [Frameworks.MaterialUi]: <MaterialUITheming />,
  });
};

export default ThemingPage;
