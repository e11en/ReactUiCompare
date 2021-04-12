import {
  useMenuState,
  Menu,
  MenuItem,
  MenuButton,
  MenuSeparator,
  useTabState,
  Tab,
  TabList,
  TabPanel,
  useToolbarState,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  Button,
} from "reakit";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Toolbars = () => {
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

const OverlayMenu = () => {
  const menu = useMenuState();

  return (
    <ElementCard title="Menu">
      <div>
        <MenuButton {...menu}>Open Menu</MenuButton>
        <Menu {...menu} aria-label="Preferences">
          <MenuItem {...menu}>Item 1</MenuItem>
          <MenuItem {...menu} disabled>
            Item 2
          </MenuItem>
          <MenuSeparator {...menu} />
          <MenuItem {...menu}>Item 3</MenuItem>
        </Menu>
      </div>
      <Code>
        {`
          const menu = useMenuState();

          <MenuButton {...menu}>Open Menu</MenuButton>
          <Menu {...menu} aria-label="Preferences">
            <MenuItem {...menu}>Item 1</MenuItem>
            <MenuItem {...menu} disabled>
              Item 2
            </MenuItem>
            <MenuSeparator {...menu} />
            <MenuItem {...menu}>Item 3</MenuItem>
          </Menu>
        `}
      </Code>
    </ElementCard>
  );
};

const TabBar = () => {
  const tab = useTabState({ selectedId: "tab1" });

  return (
    <ElementCard title="Tabs">
      <div>
        <TabList {...tab} aria-label="My tabs">
          <Tab {...tab} id="tab1">
            Selected
          </Tab>
          <Tab {...tab} disabled>
            Disabled
          </Tab>
          <Tab {...tab}>Active</Tab>
        </TabList>
        <TabPanel {...tab}>Tab 1</TabPanel>
        <TabPanel {...tab}>Tab 2</TabPanel>
        <TabPanel {...tab}>Tab 3</TabPanel>
      </div>
      <Code>
        {`
          const tab = useTabState({ selectedId: "tab1" });

          <TabList {...tab} aria-label="My tabs">
            <Tab {...tab} id="tab1">
              Selected
            </Tab>
            <Tab {...tab} disabled>
              Disabled
            </Tab>
            <Tab {...tab}>Active</Tab>
          </TabList>
          <TabPanel {...tab}>Tab 1</TabPanel>
          <TabPanel {...tab}>Tab 2</TabPanel>
          <TabPanel {...tab}>Tab 3</TabPanel>
        `}
      </Code>
    </ElementCard>
  );
};

export const Navigation = () => {
  return (
    <FlexWrapper>
      <OverlayMenu />
      <TabBar />
      <Toolbars />
    </FlexWrapper>
  );
};
