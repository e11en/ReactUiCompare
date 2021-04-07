import { Divider } from "antd";
import styled from "styled-components";

import "antd/dist/antd.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Fields = () => {
  return (
    <ElementCard title="Fields">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

export const Input = () => {
  return (
    <FlexWrapper>
      <Fields />
    </FlexWrapper>
  );
};
