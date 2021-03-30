import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";
import { Layout as AntDesignLayout } from "frameworks/ant-design";
import { Layout as MaterialUILayout } from "frameworks/material-ui";

const LayoutPage = () => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(framework, {
    [Frameworks.AntDesign]: <AntDesignLayout />,
    [Frameworks.MaterialUi]: <MaterialUILayout />,
  });
};

export default LayoutPage;
