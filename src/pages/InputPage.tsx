import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";
import { Input as AntDesignInput } from "frameworks/ant-design";
import { Input as MaterialUIInput } from "frameworks/material-ui";

const InputPage = () => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(framework, {
    [Frameworks.AntDesign]: <AntDesignInput />,
    [Frameworks.MaterialUi]: <MaterialUIInput />,
  });
};

export default InputPage;
