import {
  useToolbarState,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  Button,
} from "reakit";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const AppToolbar = () => {
  const toolbar = useToolbarState();

  return (
    <ElementCard title="Toolbar">
      <div>
        <Toolbar {...toolbar} aria-label="some toolbar">
          <ToolbarItem {...toolbar} as={Button}>
            Item 1
          </ToolbarItem>
          <ToolbarItem {...toolbar} as={Button}>
            Item 2
          </ToolbarItem>
          <ToolbarSeparator {...toolbar} />
          <ToolbarItem {...toolbar} as={Button}>
            Item 3
          </ToolbarItem>
        </Toolbar>
      </div>
      <Code>
        {`
          const toolbar = useToolbarState();

          <Toolbar {...toolbar} aria-label="some toolbar">
            <ToolbarItem {...toolbar} as={Button}>
              Item 1
            </ToolbarItem>
            <ToolbarItem {...toolbar} as={Button}>
              Item 2
            </ToolbarItem>
            <ToolbarSeparator {...toolbar} />
            <ToolbarItem {...toolbar} as={Button}>
              Item 3
            </ToolbarItem>
          </Toolbar>
        `}
      </Code>
    </ElementCard>
  );
};

export const Surface = () => {
  return (
    <FlexWrapper>
      <AppToolbar />
    </FlexWrapper>
  );
};
