import {
  Checkbox,
  useCheckboxState,
  Input as RInput,
  useRadioState,
  Radio,
  RadioGroup,
} from "reakit";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

const Fields = () => {
  return (
    <ElementCard title="Fields">
      <SpacedChildren>
        <RInput placeholder="input" />
        <RInput disabled value="disabled" />
      </SpacedChildren>
      <Code>
        {`
          <Input placeholder="input" />
          <Input disabled value="disabled" />
        `}
      </Code>
    </ElementCard>
  );
};

const CheckBoxes = () => {
  const checkbox = useCheckboxState({ state: [] });
  const values = checkbox.state as string[];

  return (
    <ElementCard title="Checkboxes">
      <SpacedChildren>
        <Checkbox /> Active
        <Checkbox checked={true} /> Checked
        <Checkbox disabled /> Disabled
        <Checkbox state="indeterminate" /> Indeterminate
      </SpacedChildren>
      <SpacedChildren>
        <Info>
          Using the "useCheckboxState" you can easily group checkboxes together.
          It doesn't play that nice with Typescript though.
        </Info>
        <div>Choices: {values.join(", ")}</div>
        <Checkbox {...checkbox} value="item1" /> Item1
        <Checkbox {...checkbox} value="item2" /> Item2
        <Checkbox {...checkbox} value="item3" /> Item3
      </SpacedChildren>
      <Code>
        {`
          <Checkbox /> Active
          <Checkbox checked={true} /> Checked
          <Checkbox disabled /> Disabled
          <Checkbox state="indeterminate" /> Indeterminate

          const checkbox = useCheckboxState({ state: [] });
          const values = checkbox.state as string[];

          <div>Choices: {values.join(", ")}</div>
          <Checkbox {...checkbox} value="item1" /> Item1
          <Checkbox {...checkbox} value="item2" /> Item2
          <Checkbox {...checkbox} value="item3" /> Item3
        `}
      </Code>
    </ElementCard>
  );
};

const Radios = () => {
  const radio = useRadioState();

  return (
    <ElementCard title="Radios">
      <div>
        <RadioGroup {...radio} aria-label="group">
          <Radio {...radio} value="item1" checked /> Item 1
          <Radio {...radio} value="item2" /> Item 2
          <Radio {...radio} value="item3" disabled /> Item 3
        </RadioGroup>
      </div>
      <Code>
        {`
          const radio = useRadioState();

          <RadioGroup {...radio} aria-label="group">
            <Radio {...radio} value="item1" checked /> Item 1
            <Radio {...radio} value="item2" /> Item 2
            <Radio {...radio} value="item3" disabled /> Item 3
          </RadioGroup>
        `}
      </Code>
    </ElementCard>
  );
};

export const Input = () => {
  return (
    <FlexWrapper>
      <Fields />
      <CheckBoxes />
      <Radios />
    </FlexWrapper>
  );
};
