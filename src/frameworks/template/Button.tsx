import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const NormalButtons = () => {
  return (
    <ElementCard title="Normal buttons">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const ButtonVariations = () => {
  return (
    <ElementCard title="Other button variations">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const ButtonSizes = () => {
  return (
    <ElementCard title="Button sizes">
      <div></div>
      <Code>
        {`
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonGroups = () => {
  return (
    <ElementCard title="Button groups">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

export const Button = () => {
  return (
    <FlexWrapper>
      <NormalButtons />
      <ButtonVariations />
      <ButtonSizes />
      <ButtonGroups />
    </FlexWrapper>
  );
};
