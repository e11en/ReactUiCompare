import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";
import { Button as AntDesignButton } from "frameworks/ant-design";
import { Button as MaterialUIButton } from "frameworks/material-ui";

const ButtonPage = () => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(framework, {
    [Frameworks.AntDesign]: <AntDesignButton />,
    [Frameworks.MaterialUi]: <MaterialUIButton />,
  });
};

export default ButtonPage;
