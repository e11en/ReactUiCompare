import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";
import { Notification as AntDesignNotification } from "frameworks/ant-design";
import { Notification as MaterialUINotification } from "frameworks/material-ui";

const NotificationPage = () => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(framework, {
    [Frameworks.AntDesign]: <AntDesignNotification />,
    [Frameworks.MaterialUi]: <MaterialUINotification />,
  });
};

export default NotificationPage;
