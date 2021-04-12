import {
  useDialogState,
  Dialog,
  DialogDisclosure,
  usePopoverState,
  Popover as RPopover,
  PopoverDisclosure,
  PopoverArrow,
} from "reakit";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Dialogs = () => {
  const dialog = useDialogState();

  return (
    <ElementCard title="Dialog">
      <SpacedChildren>
        <DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
        <Dialog
          {...dialog}
          aria-label="some content"
          tabIndex={0}
          style={{ position: "fixed", top: "50%", left: "50%" }}
        >
          Some content
        </Dialog>
      </SpacedChildren>
      <Code>
        {`
          const dialog = useDialogState();

          <DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
          <Dialog
            {...dialog}
            aria-label="some content"
            tabIndex={0}
            style={{ position: "fixed", top: "50%", left: "50%" }}
          >
            Some content
          </Dialog>
        `}
      </Code>
    </ElementCard>
  );
};

const Popover = () => {
  const popover = usePopoverState({ placement: "right-start" });

  return (
    <ElementCard title="Popover">
      <div>
        <PopoverDisclosure {...popover}>Open Popover</PopoverDisclosure>
        <RPopover {...popover} aria-label="some content">
          <PopoverArrow {...popover} />
          Some content
        </RPopover>
      </div>
      <Code>
        {`
          const popover = usePopoverState({ placement: "right-start" });

          <PopoverDisclosure {...popover}>Open Popover</PopoverDisclosure>
          <Popover {...popover} aria-label="some content">
            <PopoverArrow {...popover} />
            Some content
          </Popover>
        `}
      </Code>
    </ElementCard>
  );
};

export const Notification = () => {
  return (
    <FlexWrapper>
      <Dialogs />
      <Popover />
    </FlexWrapper>
  );
};
