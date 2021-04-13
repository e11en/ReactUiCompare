import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

const OverallLevel = () => {
  return (
    <ElementCard title="Overall styling">
      <div>
        You can easily extend or override the default theme by using the
        "extendTheme" method and passing the theme to the ChakraProvider. They
        even provide additional tools for building your own design system based
        on Chakra UI with an additional package @chakra-ui/theme-tools.
      </div>
      <Code>
        {`
          import { extendTheme } from "@chakra-ui/react";

          const theme = extendTheme({
            colors: {
              brand: {
                900: "#1a365d",
                800: "#153e75",
                700: "#2a69ac",
              }
            }
          });

          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        `}
      </Code>
    </ElementCard>
  );
};

const ComponentLevel = () => {
  return (
    <ElementCard title="Component styling">
      <div>
        They have really well rounded styling possibilities, like a so called
        Chakra Factory that creates theme-aware elements that range from simple
        HTML elements to elements from other packages or kits. Allow custom
        props to be forwarded or use it in JSX elements. And even a basic API
        for styling a single part component using the "extendTheme" method.
      </div>
      <Code>
        {`
          import { chakra } from "@chakra-ui/react";
          import Textarea from "react-input-autoresize";

          // HTML element
          <chakra.button
            bg="green.200"
            _hover={{ bg: "green.300" }}
          >
            Click me
          </chakra.button>

          // Element from other package
          const AutoResizeInput = chakra(Textarea);
          <AutoResizeInput bg="red.200" fontSize="12px" />

          // JSX element
          const Card = chakra("div", {
            baseStyle: {
              shadow: "lg",
              rounded: "lg",
              bg: "white",
            },
          });
        `}
      </Code>
    </ElementCard>
  );
};

const StyledComponent = () => {
  return (
    <ElementCard title="Styled component">
      <div>
        Chakra UI inherently uses styled components but you can also easily
        create reusable (global) styles by using "textStyle". or "layerStyle".
      </div>
      <Code>
        {`
          const theme = extendTheme({
            layerStyles: {
              selected: {
                bg: "teal.500",
                color: "teal.700",
                borderColor: "orange.500",
              },
            },
            textStyles: {
              h1: {
                fontSize: ["48px", "72px"],
                fontWeight: "bold",
                lineHeight: "110%",
                letterSpacing: "-2%",
              },
            },
          });

          <Box layerStyle="selected">This is a box</Box>
          <Box textStyle="h1">This is a box</Box>
        `}
      </Code>
    </ElementCard>
  );
};

const ThirdParty = () => {
  return (
    <ElementCard title="Third party">
      <div>
        <Info>
          The documentation talks about the "runtime trade-off", they warn about
          the possible large footprint of an application when it deals with high
          frequent data changes that are performance sensitive. This runtime
          footprint is caused by style computations by styled-system, and
          className generation by emotion.
        </Info>
        Under the hood they use the emotion package combined with styled-system
        so you can easily use the same.
      </div>
    </ElementCard>
  );
};

export const Theming = () => {
  return (
    <FlexWrapper>
      <OverallLevel />
      <ComponentLevel />
      <StyledComponent />
      <ThirdParty />
    </FlexWrapper>
  );
};
