import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";

import { Button as AntDesignButton } from "frameworks/ant-design";
import { Button as MaterialUIButton } from "frameworks/material-ui";
import { Conclusion as AntDesignConclusion } from "frameworks/ant-design";
import { Conclusion as MaterialUIConclusion } from "frameworks/material-ui";
import { Data as AntDesignData } from "frameworks/ant-design";
import { Data as MaterialUIData } from "frameworks/material-ui";
import { Input as AntDesignInput } from "frameworks/ant-design";
import { Input as MaterialUIInput } from "frameworks/material-ui";
import { Layout as AntDesignLayout } from "frameworks/ant-design";
import { Layout as MaterialUILayout } from "frameworks/material-ui";
import { Navigation as AntDesignNavigation } from "frameworks/ant-design";
import { Navigation as MaterialUINavigation } from "frameworks/material-ui";
import { Notification as AntDesignNotification } from "frameworks/ant-design";
import { Notification as MaterialUINotification } from "frameworks/material-ui";
import { Surface as AntDesignSurface } from "frameworks/ant-design";
import { Surface as MaterialUISurface } from "frameworks/material-ui";
import { Theming as AntDesignTheming } from "frameworks/ant-design";
import { Theming as MaterialUITheming } from "frameworks/material-ui";

const Page = ({ type }: any) => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(
    framework,
    {
      button: {
        [Frameworks.AntDesign]: <AntDesignButton />,
        [Frameworks.MaterialUi]: <MaterialUIButton />,
      },
      conclusion: {
        [Frameworks.AntDesign]: <AntDesignConclusion />,
        [Frameworks.MaterialUi]: <MaterialUIConclusion />,
      },
      data: {
        [Frameworks.AntDesign]: <AntDesignData />,
        [Frameworks.MaterialUi]: <MaterialUIData />,
      },
      input: {
        [Frameworks.AntDesign]: <AntDesignInput />,
        [Frameworks.MaterialUi]: <MaterialUIInput />,
      },
      layout: {
        [Frameworks.AntDesign]: <AntDesignLayout />,
        [Frameworks.MaterialUi]: <MaterialUILayout />,
      },
      navigation: {
        [Frameworks.AntDesign]: <AntDesignNavigation />,
        [Frameworks.MaterialUi]: <MaterialUINavigation />,
      },
      notification: {
        [Frameworks.AntDesign]: <AntDesignNotification />,
        [Frameworks.MaterialUi]: <MaterialUINotification />,
      },
      surface: {
        [Frameworks.AntDesign]: <AntDesignSurface />,
        [Frameworks.MaterialUi]: <MaterialUISurface />,
      },
      theming: {
        [Frameworks.AntDesign]: <AntDesignTheming />,
        [Frameworks.MaterialUi]: <MaterialUITheming />,
      },
    },
    type
  );
};

export default Page;
