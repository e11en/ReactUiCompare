import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Avatars = () => {
  return (
    <ElementCard title="Avatar">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Badges = () => {
  return (
    <ElementCard title="Badge">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Chips = () => {
  return (
    <ElementCard title="Chip">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Lists = () => {
  return (
    <ElementCard title="List">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Tables = () => {
  return (
    <ElementCard title="Table">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

export const Data = () => {
  return (
    <FlexWrapper>
      <Avatars />
      <Badges />
      <Chips />
      <Lists />
      <Tables />
    </FlexWrapper>
  );
};
