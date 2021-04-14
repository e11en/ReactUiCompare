import React from "react";

export const Frameworks = {
  MaterialUi: "material-ui",
  AntDesign: "ant-design",
  Reakit: "reakit",
  ChakraUI: "chakra-ui",
  Bootstrap: "bootstrap",
  SemanticUI: "semantic-ui",
};

const FrameworkContext = React.createContext(Frameworks.MaterialUi);

export default FrameworkContext;
