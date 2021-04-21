import { Button as AntdButton, Dropdown, Menu, Upload } from "antd";
import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "antd/dist/antd.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

const ButtonWrapper = styled.div`
  & > * {
    margin: 0 1em 1em 0;
  }
`;

const NormalButtons = () => {
  return (
    <ElementCard title="Normal buttons">
      <ButtonWrapper>
        <AntdButton type="primary">Default</AntdButton>
        <AntdButton type="primary" disabled>
          Disabled
        </AntdButton>
      </ButtonWrapper>
      <Code>
        {`
          <Button type="primary">Default</Button>
          <Button type="primary" disabled>Disabled</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonVariations = () => {
  return (
    <ElementCard title="Other button variations">
      <ButtonWrapper>
        <AntdButton>Default</AntdButton>
        <AntdButton danger>Danger</AntdButton>
        <AntdButton type="dashed">Default</AntdButton>
        <AntdButton type="link">Link</AntdButton>
        <AntdButton type="primary" shape="circle">
          S
        </AntdButton>
        <AntdButton type="primary" icon={<SearchOutlined />}>
          Icon button
        </AntdButton>
      </ButtonWrapper>
      <Code>
        {`
          <Button>Default</Button>
          <Button danger>Danger</Button>
          <Button type="dashed">Default</Button>
          <Button type="link">Link</Button>
          <Button type="primary" shape="circle">S</Button>
          <Button type="primary" icon={<SearchOutlined />}>Icon button</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonSizes = () => {
  return (
    <ElementCard title="Button sizes">
      <ButtonWrapper>
        <AntdButton type="primary" size="small">
          Small
        </AntdButton>
        <AntdButton type="primary" size="middle">
          Middle
        </AntdButton>
        <AntdButton type="primary" size="large">
          Large
        </AntdButton>
      </ButtonWrapper>
      <Code>
        {`
          <Button size="small">Small</Button>
          <Button size="middle">Middle</Button>
          <Button size="large">Large</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonGroups = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  return (
    <ElementCard title="Button groups">
      <Info>
        Ant Design doesn't have button groups but it does have a dropdown menu
        button.
      </Info>
      <ButtonWrapper>
        <Dropdown.Button type="primary" overlay={menu}>
          Button group
        </Dropdown.Button>
      </ButtonWrapper>
      <Code>
        {`
            <Dropdown.Button overlay={
              <Menu>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
              </Menu>
            }>
              Button group
            </Dropdown.Button>
        `}
      </Code>
    </ElementCard>
  );
};

const UploadButton = () => {
  return (
    <ElementCard title="Upload">
      <div>
        <Upload>
          <AntdButton icon={<UploadOutlined />}>Click to Upload</AntdButton>
        </Upload>
      </div>
      <Code>
        {`
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        `}
      </Code>
    </ElementCard>
  );
};

export const Button = () => {
  return (
    <FlexWrapper>
      <NormalButtons />
      <ButtonVariations />
      <ButtonSizes />
      <ButtonGroups />
      <UploadButton />
    </FlexWrapper>
  );
};
