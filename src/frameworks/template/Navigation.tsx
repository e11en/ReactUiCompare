import Code from "components/CodeComponent";
import ElementCard, { GreyBox } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const BottomNav = () => {
  return (
    <ElementCard title="Bottom navigation">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Breadcrumb = () => {
  return (
    <ElementCard title="Breadcrumb">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Drawers = () => {
  return (
    <ElementCard title="Drawer">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const OverlayMenu = () => {
  return (
    <ElementCard title="Menu">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Steppers = () => {
  return (
    <ElementCard title="Stepper">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const TabBar = () => {
  return (
    <ElementCard title="Tabs">
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
      <Breadcrumb />
      <OverlayMenu />
      <Steppers />
      <TabBar />
      <Drawers />
      <BottomNav />
    </FlexWrapper>
  );
};
