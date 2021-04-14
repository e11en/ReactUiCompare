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
import {
  Button as BootstrapButton,
  Conclusion as BootstrapConclusion,
  Data as BootstrapData,
  Input as BootstrapInput,
  Layout as BootstrapLayout,
  Navigation as BootstrapNavigation,
  Notification as BootstrapNotification,
  Surface as BootstrapSurface,
  Theming as BootstrapTheming,
} from "frameworks/bootstrap";
import {
  Button as SemanticUIButton,
  Conclusion as SemanticUIConclusion,
  Data as SemanticUIData,
  Input as SemanticUIInput,
  Layout as SemanticUILayout,
  Navigation as SemanticUINavigation,
  Notification as SemanticUINotification,
  Surface as SemanticUISurface,
  Theming as SemanticUITheming,
} from "frameworks/semantic-ui";

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
        [Frameworks.Bootstrap]: <BootstrapButton />,
        [Frameworks.SemanticUI]: <SemanticUIButton />,
      },
      conclusion: {
        [Frameworks.AntDesign]: <AntDesignConclusion />,
        [Frameworks.MaterialUi]: <MaterialUIConclusion />,
        [Frameworks.Reakit]: <ReakitConclusion />,
        [Frameworks.ChakraUI]: <ChakraUIConclusion />,
        [Frameworks.Bootstrap]: <BootstrapConclusion />,
        [Frameworks.SemanticUI]: <SemanticUIConclusion />,
      },
      data: {
        [Frameworks.AntDesign]: <AntDesignData />,
        [Frameworks.MaterialUi]: <MaterialUIData />,
        [Frameworks.ChakraUI]: <ChakraUIData />,
        [Frameworks.Bootstrap]: <BootstrapData />,
        [Frameworks.SemanticUI]: <SemanticUIData />,
      },
      input: {
        [Frameworks.AntDesign]: <AntDesignInput />,
        [Frameworks.MaterialUi]: <MaterialUIInput />,
        [Frameworks.Reakit]: <ReakitInput />,
        [Frameworks.ChakraUI]: <ChakraUIInput />,
        [Frameworks.Bootstrap]: <BootstrapInput />,
        [Frameworks.SemanticUI]: <SemanticUIInput />,
      },
      layout: {
        [Frameworks.AntDesign]: <AntDesignLayout />,
        [Frameworks.MaterialUi]: <MaterialUILayout />,
        [Frameworks.ChakraUI]: <ChakraUILayout />,
        [Frameworks.Bootstrap]: <BootstrapLayout />,
        [Frameworks.SemanticUI]: <SemanticUILayout />,
      },
      navigation: {
        [Frameworks.AntDesign]: <AntDesignNavigation />,
        [Frameworks.MaterialUi]: <MaterialUINavigation />,
        [Frameworks.Reakit]: <ReakitNavigation />,
        [Frameworks.ChakraUI]: <ChakraUINavigation />,
        [Frameworks.Bootstrap]: <BootstrapNavigation />,
        [Frameworks.SemanticUI]: <SemanticUINavigation />,
      },
      notification: {
        [Frameworks.AntDesign]: <AntDesignNotification />,
        [Frameworks.MaterialUi]: <MaterialUINotification />,
        [Frameworks.Reakit]: <ReakitNotification />,
        [Frameworks.ChakraUI]: <ChakraUINotification />,
        [Frameworks.Bootstrap]: <BootstrapNotification />,
        [Frameworks.SemanticUI]: <SemanticUINotification />,
      },
      surface: {
        [Frameworks.AntDesign]: <AntDesignSurface />,
        [Frameworks.MaterialUi]: <MaterialUISurface />,
        [Frameworks.Reakit]: <ReakitSurface />,
        [Frameworks.ChakraUI]: <ChakraUISurface />,
        [Frameworks.Bootstrap]: <BootstrapSurface />,
        [Frameworks.SemanticUI]: <SemanticUISurface />,
      },
      theming: {
        [Frameworks.AntDesign]: <AntDesignTheming />,
        [Frameworks.MaterialUi]: <MaterialUITheming />,
        [Frameworks.Reakit]: <ReakitTheming />,
        [Frameworks.ChakraUI]: <ChakraUITheming />,
        [Frameworks.Bootstrap]: <BootstrapTheming />,
        [Frameworks.SemanticUI]: <SemanticUITheming />,
      },
    },
    type
  );
};

export default Page;
