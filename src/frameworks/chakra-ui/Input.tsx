import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

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

const CheckBoxes = () => {
  return (
    <ElementCard title="Checkboxes">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const DateTimePickers = () => {
  return (
    <ElementCard title="Date time pickers">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Radios = () => {
  return (
    <ElementCard title="Radios">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Selects = () => {
  return (
    <ElementCard title="Select">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Sliders = () => {
  return (
    <ElementCard title="Sliders">
      <div></div>
      <Code>
        {`

        />
        `}
      </Code>
    </ElementCard>
  );
};

const Switches = () => {
  return (
    <ElementCard title="Switches">
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
      <CheckBoxes />
      <DateTimePickers />
      <Radios />
      <Selects />
      <Sliders />
      <Switches />
    </FlexWrapper>
  );
};
