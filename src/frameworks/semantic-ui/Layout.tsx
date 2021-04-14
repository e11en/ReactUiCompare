import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Containers = () => {
  return (
    <ElementCard fullwidth title="Container">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Grids = () => {
  return (
    <ElementCard title="Grid">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Other = () => {
  return (
    <ElementCard title="Other">
      <div></div>
      <Code>
        {`
        
        `}
      </Code>
    </ElementCard>
  );
};

export const Layout = () => {
  return (
    <FlexWrapper>
      <Containers />
      <Grids />
      <Other />
    </FlexWrapper>
  );
};
