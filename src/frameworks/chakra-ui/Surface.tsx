import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const AppToolBar = () => {
  return (
    <ElementCard title="App tool bar">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Papers = () => {
  return (
    <ElementCard title="Paper">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Cards = () => {
  return (
    <ElementCard title="Card">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Accordions = () => {
  return (
    <ElementCard title="Accordion">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

export const Surface = () => {
  return (
    <FlexWrapper>
      <AppToolBar />
      <Papers />
      <Cards />
      <Accordions />
    </FlexWrapper>
  );
};
