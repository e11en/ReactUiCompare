import { useContext } from "react";

import FrameworkContext from "../state/FrameworkContext";

const ButtonPage = () => {
  const framework = useContext(FrameworkContext);

  return <>{framework}</>;
};

export default ButtonPage;
