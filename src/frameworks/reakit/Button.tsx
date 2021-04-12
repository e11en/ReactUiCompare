import { useState } from "react";
import { Checkbox, Button as RButton, Group } from "reakit";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

const NormalButtons = () => {
  return (
    <ElementCard title="Normal buttons">
      <SpacedChildren>
        <RButton>Button</RButton>
        <RButton disabled>Button</RButton>
      </SpacedChildren>
      <Code>
        {`
          <Button>Button</Button>
          <Button disabled>Button</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonVariations = () => {
  const [checked, setChecked] = useState(false);

  return (
    <ElementCard title="Other button variations">
      <div>
        <Info>
          You can use the "as" property to change another component into a
          button.
        </Info>
        <Checkbox as={RButton} onChange={() => setChecked(!checked)}>
          {checked ? "Uncheck" : "Check"}
        </Checkbox>
      </div>
      <Code>
        {`
          const [checked, setChecked] = useState(false);

          <Checkbox as={Button} onChange={() => setChecked(!checked)}>
            {checked ? "Uncheck" : "Check"}
          </Checkbox>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonGroups = () => {
  return (
    <ElementCard title="Button groups">
      <div>
        <Info>
          Isn't explicit for button but wraps the components in a div with the
          "role" prop set to group.
        </Info>
        <Group>
          <RButton>One</RButton>
          <RButton>Two</RButton>
          <RButton>Three</RButton>
        </Group>
      </div>
      <Code>
        {`
          <Group>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Group>
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
      <ButtonGroups />
    </FlexWrapper>
  );
};
