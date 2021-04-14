import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Dialogs = () => {
  return (
    <ElementCard title="Dialog">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Alerts = () => {
  return (
    <ElementCard title="Alert">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Popover = () => {
  return (
    <ElementCard title="Popover">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

export const Notification = () => {
  return (
    <FlexWrapper>
      <Dialogs />
      <Alerts />
      <Popover />
    </FlexWrapper>
  );
};
