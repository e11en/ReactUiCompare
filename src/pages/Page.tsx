import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";
import { getComponentByFramework } from "helpers/pageHelpers";

import {
  Button as AntDesignButton,
  Conclusion as AntDesignConclusion,
  Data as AntDesignData,
  Input as AntDesignInput,
  Layout as AntDesignLayout,
  Navigation as AntDesignNavigation,
  Notification as AntDesignNotification,
  Surface as AntDesignSurface,
  Theming as AntDesignTheming,
} from "frameworks/ant-design";
import {
  Button as MaterialUIButton,
  Conclusion as MaterialUIConclusion,
  Data as MaterialUIData,
  Input as MaterialUIInput,
  Layout as MaterialUILayout,
  Navigation as MaterialUINavigation,
  Notification as MaterialUINotification,
  Surface as MaterialUISurface,
  Theming as MaterialUITheming,
} from "frameworks/material-ui";
import {
  Button as ReakitButton,
  Conclusion as ReakitConclusion,
  Input as ReakitInput,
  Navigation as ReakitNavigation,
  Notification as ReakitNotification,
  Surface as ReakitSurface,
  Theming as ReakitTheming,
} from "frameworks/reakit";
import {
  Button as ChakraUIButton,
  Conclusion as ChakraUIConclusion,
  Data as ChakraUIData,
  Input as ChakraUIInput,
  Layout as ChakraUILayout,
  Navigation as ChakraUINavigation,
  Notification as ChakraUINotification,
  Surface as ChakraUISurface,
  Theming as ChakraUITheming,
} from "frameworks/chakra-ui";

const Page = ({ type }: any) => {
  const framework = useContext(FrameworkContext);

  return getComponentByFramework(
    framework,
    {
      button: {
        [Frameworks.AntDesign]: <AntDesignButton />,
        [Frameworks.MaterialUi]: <MaterialUIButton />,
        [Frameworks.Reakit]: <ReakitButton />,
        [Frameworks.ChakraUI]: <ChakraUIButton />,
      },
      conclusion: {
        [Frameworks.AntDesign]: <AntDesignConclusion />,
        [Frameworks.MaterialUi]: <MaterialUIConclusion />,
        [Frameworks.Reakit]: <ReakitConclusion />,
        [Frameworks.ChakraUI]: <ChakraUIConclusion />,
      },
      data: {
        [Frameworks.AntDesign]: <AntDesignData />,
        [Frameworks.MaterialUi]: <MaterialUIData />,
        [Frameworks.ChakraUI]: <ChakraUIData />,
      },
      input: {
        [Frameworks.AntDesign]: <AntDesignInput />,
        [Frameworks.MaterialUi]: <MaterialUIInput />,
        [Frameworks.Reakit]: <ReakitInput />,
        [Frameworks.ChakraUI]: <ChakraUIInput />,
      },
      layout: {
        [Frameworks.AntDesign]: <AntDesignLayout />,
        [Frameworks.MaterialUi]: <MaterialUILayout />,
        [Frameworks.ChakraUI]: <ChakraUILayout />,
      },
      navigation: {
        [Frameworks.AntDesign]: <AntDesignNavigation />,
        [Frameworks.MaterialUi]: <MaterialUINavigation />,
        [Frameworks.Reakit]: <ReakitNavigation />,
        [Frameworks.ChakraUI]: <ChakraUINavigation />,
      },
      notification: {
        [Frameworks.AntDesign]: <AntDesignNotification />,
        [Frameworks.MaterialUi]: <MaterialUINotification />,
        [Frameworks.Reakit]: <ReakitNotification />,
        [Frameworks.ChakraUI]: <ChakraUINotification />,
      },
      surface: {
        [Frameworks.AntDesign]: <AntDesignSurface />,
        [Frameworks.MaterialUi]: <MaterialUISurface />,
        [Frameworks.Reakit]: <ReakitSurface />,
        [Frameworks.ChakraUI]: <ChakraUISurface />,
      },
      theming: {
        [Frameworks.AntDesign]: <AntDesignTheming />,
        [Frameworks.MaterialUi]: <MaterialUITheming />,
        [Frameworks.Reakit]: <ReakitTheming />,
        [Frameworks.ChakraUI]: <ChakraUITheming />,
      },
    },
    type
  );
};

export default Page;
