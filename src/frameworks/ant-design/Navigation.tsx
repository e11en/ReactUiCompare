import React, { useState } from "react";
import {
  Breadcrumb,
  Menu,
  Dropdown,
  Button,
  Steps,
  Pagination,
  Drawer,
} from "antd";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Breadcrumbs = () => {
  return (
    <ElementCard title="Breadcrumb">
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Group</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Page</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Code>
        {`
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Group</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Page</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        `}
      </Code>
    </ElementCard>
  );
};

const Menus = () => {
  return (
    <ElementCard title="Menu">
      <div>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <a href="#">Item 1</a>
              </Menu.Item>
              <Menu.Item>
                <a href="#">Item 2</a>
              </Menu.Item>
              <Menu.Item disabled>
                <a href="#">Item 3</a>
              </Menu.Item>
            </Menu>
          }
          placement="bottomLeft"
        >
          <Button>Open menu</Button>
        </Dropdown>
      </div>
      <Code>
        {`
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a href="#">Item 1</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#">Item 2</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#">Item 3</a>
                </Menu.Item>
              </Menu>
            }
            placement="bottomLeft">
            <Button>Open menu</Button>
          </Dropdown>
        `}
      </Code>
    </ElementCard>
  );
};

const Stepper = () => {
  return (
    <ElementCard title="Stepper">
      <div>
        <Steps current={1}>
          <Steps.Step title="Step 1" />
          <Steps.Step title="Step 2" />
          <Steps.Step title="Step 3" />
        </Steps>
      </div>
      <Code>
        {`
          <Steps current={1}>
            <Steps.Step title="Step 1" />
            <Steps.Step title="Step 2" />
            <Steps.Step title="Step 3" />
          </Steps>
        `}
      </Code>
    </ElementCard>
  );
};

const Tabs = () => {
  const [value, setValue] = React.useState("1");

  return (
    <ElementCard title="Tabs">
      <div>
        <Menu
          selectedKeys={[value]}
          onClick={(e) => setValue(e.key.toString())}
          mode="horizontal"
        >
          <Menu.Item key="1">Selected</Menu.Item>
          <Menu.Item key="2" disabled>
            Disabled
          </Menu.Item>
          <Menu.Item key="3">Active</Menu.Item>
        </Menu>
      </div>
      <Code>
        {`
          const [value, setValue] = React.useState("1");
          
          <Menu
            selectedKeys={[value]}
            onClick={(e) => setValue(e.key.toString())}
            mode="horizontal">
            <Menu.Item key="1">Selected</Menu.Item>
            <Menu.Item key="2" disabled>
              Disabled
            </Menu.Item>
            <Menu.Item key="3">Active</Menu.Item>
          </Menu>
        `}
      </Code>
    </ElementCard>
  );
};

const Drawers = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const directions: ("left" | "right" | "top" | "bottom")[] = [
    "left",
    "right",
    "top",
    "bottom",
  ];

  const toggleDrawer = (anchor: string, open: boolean) => () =>
    setState({ ...state, [anchor]: open });

  return (
    <ElementCard title="Drawer">
      <div>
        {directions.map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              title="Drawer"
              placement={anchor}
              onClose={toggleDrawer(anchor, false)}
              visible={state[anchor]}
            >
              <p>Hello!</p>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Code>
        {`
          const [isOpen, setIsOpen] = useState();

          <Drawer
            title="Drawer"
            placement="left"
            onClose={setIsOpen()}
            visible={isOpen}
          >
            <p>Hello!</p>
          </Drawer>
        `}
      </Code>
    </ElementCard>
  );
};

const Paginations = () => {
  return (
    <ElementCard title="Pagination">
      <div>
        <Pagination defaultCurrent={1} total={50} />
      </div>
      <Code>
        {`
          <Pagination defaultCurrent={1} total={50} />
        `}
      </Code>
    </ElementCard>
  );
};

export const Navigation = () => {
  return (
    <FlexWrapper>
      <Breadcrumbs />
      <Menus />
      <Stepper />
      <Tabs />
      <Drawers />
      <Paginations />
    </FlexWrapper>
  );
};
