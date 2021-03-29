import React from "react";

export const Frameworks = {
  MaterialUi: "material-ui",
  AntDesign: "ant-design"
};

const FrameworkContext = React.createContext(Frameworks.MaterialUi);

export default FrameworkContext;
