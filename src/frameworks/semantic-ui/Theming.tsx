import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const OverallLevel = () => {
  return (
    <ElementCard title="Overall styling">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const ComponentLevel = () => {
  return (
    <ElementCard title="Component styling">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const StyledComponent = () => {
  return (
    <ElementCard title="Styled component">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const ThirdParty = () => {
  return (
    <ElementCard title="Third party">
      <div></div>
      <Code>
        {`

        `}
      </Code>
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
