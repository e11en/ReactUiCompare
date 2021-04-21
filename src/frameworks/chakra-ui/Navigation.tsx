import {
  ChakraProvider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { ChevronRightIcon, AddIcon } from "@chakra-ui/icons";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import { useState } from "react";
import Info from "components/InfoComponent";

const BoxedTabs = styled(Tabs)`
  padding: 1em;
  border: 1px solid #d6d6d6;
`;

const Breadcrumbs = () => {
  return (
    <ElementCard title="Breadcrumb">
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Group</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Group</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Group</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Page</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Code>
        {`
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Group</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Page</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb separator="-">
            ...
          </Breadcrumb>

          <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
            ...
          </Breadcrumb>
        `}
      </Code>
    </ElementCard>
  );
};

const Drawers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState<any>("right");
  const [size, setSize] = useState<any>("md");
  const directions = ["left", "right", "top", "bottom"];
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

  const openNormalDrawer = (direction: any) => {
    setSize("md");
    setPlacement(direction);
    onOpen();
  };

  const openSizeDrawer = (size: any) => {
    setPlacement("right");
    setSize(size);
    onOpen();
  };

  return (
    <ElementCard title="Drawer">
      <SpacedChildren>
        {directions.map((d) => (
          <Button colorScheme="blue" onClick={() => openNormalDrawer(d)}>
            Open {d}
          </Button>
        ))}

        {sizes.map((s) => (
          <Button colorScheme="blue" onClick={() => openSizeDrawer(s)}>
            Open {s}
          </Button>
        ))}

        <Drawer
          placement={placement}
          onClose={onClose}
          isOpen={isOpen}
          size={size}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Drawer</DrawerHeader>
              <DrawerBody>
                <p>Hello!</p>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </SpacedChildren>
      <Code>
        {`
          const { isOpen, onOpen, onClose } = useDisclosure();
          <Button colorScheme="blue" onClick={onOpen}>Open</Button>

          <Drawer
            placement="right"
            size="md"
            onClose={onClose}
            isOpen={isOpen}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">Drawer</DrawerHeader>
                <DrawerBody>
                  <p>Hello!</p>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        `}
      </Code>
    </ElementCard>
  );
};

const OverlayMenu = () => {
  return (
    <ElementCard title="Menu">
      <div>
        <Menu>
          <MenuButton as={Button} aria-label="Options" variant="outline">
            Open menu
          </MenuButton>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem icon={<AddIcon />}>Item 2</MenuItem>
            <MenuItem command="⌘N">Item 3</MenuItem>
            <MenuItem isDisabled>Item 4</MenuItem>
            <MenuDivider />
            <MenuGroup title="Group">
              <MenuItem>Group item 1</MenuItem>
              <MenuItem>Group item 2</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
      <Code>
        {`
          <Menu>
            <MenuButton as={Button} aria-label="Options" variant="outline">
              Open menu
            </MenuButton>
            <MenuList>
              <MenuItem>Item 1</MenuItem>
              <MenuItem icon={<AddIcon />}>Item 2</MenuItem>
              <MenuItem command="⌘N">Item 3</MenuItem>
              <MenuItem isDisabled>Item 4</MenuItem>
              <MenuDivider />
              <MenuGroup title="Group">
                <MenuItem>Group item 1</MenuItem>
                <MenuItem>Group item 2</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        `}
      </Code>
    </ElementCard>
  );
};

const TabBar = () => {
  const basicPanel = (
    <TabPanels>
      <TabPanel>
        <p>One</p>
      </TabPanel>
    </TabPanels>
  );

  return (
    <ElementCard title="Tabs">
      <SpacedChildren>
        <Info>
          The "isSelected" property does not work and a console error is shown
          that the property isn't recognized.
        </Info>
        <BoxedTabs>
          <TabList>
            <Tab isSelected>Selected</Tab>
            <Tab isDisabled>Disabled</Tab>
            <Tab>Active</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>One</p>
            </TabPanel>
            <TabPanel>
              <p>Two</p>
            </TabPanel>
            <TabPanel>
              <p>Three</p>
            </TabPanel>
          </TabPanels>
        </BoxedTabs>

        <BoxedTabs align="end">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          {basicPanel}
        </BoxedTabs>
        <BoxedTabs isFitted>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          {basicPanel}
        </BoxedTabs>

        <BoxedTabs variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          {basicPanel}
        </BoxedTabs>
        <BoxedTabs variant="enclosed-colored">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          {basicPanel}
        </BoxedTabs>
        <BoxedTabs variant="soft-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          {basicPanel}
        </BoxedTabs>
        <BoxedTabs variant="solid-rounded">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          {basicPanel}
        </BoxedTabs>
      </SpacedChildren>
      <Code>
        {`
          <Tabs>
            <TabList>
              <Tab isSelected>Selected</Tab>
              <Tab isDisabled>Disabled</Tab>
              <Tab>Active</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>One</p>
              </TabPanel>
              <TabPanel>
                <p>Two</p>
              </TabPanel>
              <TabPanel>
                <p>Three</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Tabs align="end">...</Tabs>
          <Tabs isFitted>...</Tabs>

          <Tabs variant="enclosed">...</Tabs>
          <Tabs variant="enclosed-colored">...</Tabs>
          <Tabs variant="soft-rounded">...</Tabs>
          <Tabs variant="solid-rounded">...</Tabs>
        `}
      </Code>
    </ElementCard>
  );
};

export const Navigation = () => {
  return (
    <ChakraProvider>
      <FlexWrapper>
        <Breadcrumbs />
        <OverlayMenu />
        <TabBar />
        <Drawers />
      </FlexWrapper>
    </ChakraProvider>
  );
};
