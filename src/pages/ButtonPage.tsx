import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { Button as AntDesignButton } from "frameworks/ant-design";
import { Button as MaterialUIButton } from "frameworks/material-ui";

const ButtonPage = () => {
  const framework = useContext(FrameworkContext);

  switch(framework) {
    case Frameworks.AntDesign: 
    return <AntDesignButton />;
    case Frameworks.MaterialUi: 
    default:
      return <MaterialUIButton />;
  }
};

export default ButtonPage;
