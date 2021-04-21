import { Layout, Button, Typography, Menu, Dropdown } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const Header = styled(Layout.Header)`
  display: flex;
  align-items: center;
`;

const Title = styled(Typography.Title)`
  flex: 1;
  margin: 0;

  && {
    margin: 0 1em 0;
    color: #fff;
  }
`;

const HeaderButton = styled(Button)`
  color: #fff;
`;

const HeaderComponent = ({ onMenuClick }: any) => {
  return (
    <Header>
      <HeaderButton icon={<MenuOutlined />} type="link" onClick={onMenuClick} />
      <Title level={2}>Real life</Title>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item>Account</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
          </Menu>
        }
      >
        <HeaderButton icon={<UserOutlined />} type="link" />
      </Dropdown>
    </Header>
  );
};

export default HeaderComponent;
