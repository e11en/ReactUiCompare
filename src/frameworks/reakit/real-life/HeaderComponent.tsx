import { Button, useMenuState, Menu, MenuItem, MenuButton } from "reakit";
import { HamburgerIcon } from "@chakra-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styled from "@emotion/styled";

import { theme } from "./theme";

const Header = styled.div`
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 1em;

  h2 {
    margin-left: 1em;
    color: #fff;
    flex: 1;
  }
`;

const HeaderMenuButton = styled(Button)`
  color: #fff;
  background-color: transparent;
  border: none;
`;

const HeaderButton = styled(MenuButton)`
  color: #fff;
  background-color: transparent;
  border: none;
`;

const HeaderComponent = ({ onMenuClick }: any) => {
  const menu = useMenuState();

  return (
    <Header>
      <HeaderMenuButton onClick={onMenuClick}>
        <HamburgerIcon />
      </HeaderMenuButton>
      <h2>Real life</h2>
      <HeaderButton {...menu}>
        <AccountCircleIcon />
      </HeaderButton>
      <Menu {...menu} aria-label="Account">
        <MenuItem {...menu}>Account</MenuItem>
        <MenuItem {...menu}>Logout</MenuItem>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
