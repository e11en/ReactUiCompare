import { Drawer, Menu } from "antd";
import styled from "@emotion/styled";

const Logo = styled.div`
  height: 5em;
  display: flex;
  justify-content: center;
  padding: 1em;

  img {
    height: 100%;
  }
`;

const ListMenu = styled(Menu)`
  border: none;
`;

const MenuComponent = ({ open, onClose }: any) => {
  return (
    <Drawer
      title={
        <Logo>
          <img
            src="https://ellenlangelaar.nl/img/ellenlangelaar.png"
            alt="logo"
          />
        </Logo>
      }
      placement="left"
      closable={false}
      onClose={onClose}
      visible={open}
      getContainer={false}
      style={{ position: "absolute" }}
    >
      <ListMenu>
        <Menu.Item>Account</Menu.Item>
        <Menu.Item>Another menu item</Menu.Item>
      </ListMenu>
    </Drawer>
  );
};

export default MenuComponent;
