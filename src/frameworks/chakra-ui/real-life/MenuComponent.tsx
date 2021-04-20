import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const drawerOverlayStyle = css`
  && {
    position: absolute;
    width: 100%;
    height: 100%;

    .chakra-modal__content-container {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`;

const drawerContentStyle = css`
  && {
    position: absolute !important;
  }
`;

const logoStyle = css`
  height: 5em;
  display: flex;
  justify-content: center;
  padding: 1em;

  img {
    height: 100%;
  }
`;

const menuStyle = css`
  border: none;
  box-shadow: none;
`;

const MenuComponent = ({ open, onClose, containerRef }: any) => {
  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={open}
      portalProps={{ containerRef }}
    >
      <DrawerOverlay css={drawerOverlayStyle}>
        <DrawerContent css={drawerContentStyle}>
          <DrawerHeader borderBottomWidth="1px">
            <div css={logoStyle}>
              <img
                src="https://ellenlangelaar.nl/img/ellenlangelaar.png"
                alt="logo"
              />
            </div>
          </DrawerHeader>
          <DrawerBody>
            <Menu isOpen={true}>
              <MenuList css={menuStyle}>
                <MenuItem>Account</MenuItem>
                <MenuItem>Another menu item</MenuItem>
              </MenuList>
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MenuComponent;
