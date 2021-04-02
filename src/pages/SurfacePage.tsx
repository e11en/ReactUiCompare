import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";
import { Surface as AntDesignSurface } from "frameworks/ant-design";
import { Surface as MaterialUISurface } from "frameworks/material-ui";

const HeaderPage = () => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(framework, {
    [Frameworks.AntDesign]: <AntDesignSurface />,
    [Frameworks.MaterialUi]: <MaterialUISurface />,
  });
};

export default HeaderPage;
