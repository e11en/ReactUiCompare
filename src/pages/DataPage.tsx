import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";
import { Data as AntDesignData } from "frameworks/ant-design";
import { Data as MaterialUIData } from "frameworks/material-ui";

const DataPage = () => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(framework, {
    [Frameworks.AntDesign]: <AntDesignData />,
    [Frameworks.MaterialUi]: <MaterialUIData />,
  });
};

export default DataPage;
