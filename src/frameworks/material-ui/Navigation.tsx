import { Menu } from "@material-ui/core";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Navigations = () => {
  return (
    <ElementCard fullwidth title="Menu's">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

export const Navigation = () => {
  return (
    <FlexWrapper>
      <Navigations />
    </FlexWrapper>
  );
};
