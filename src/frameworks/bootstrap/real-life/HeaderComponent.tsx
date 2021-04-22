import { Navbar, Button, Dropdown } from "react-bootstrap";
import { HamburgerIcon } from "@chakra-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styled from "@emotion/styled";

const Title = styled(Navbar.Brand)`
  flex: 1;

  &.navbar-brand,
  &.navbar-brand:hover {
    color: #fff;
  }
`;

const MenuButton = styled(Button)`
  color: #fff;
`;

const DropdownButton = styled(Dropdown.Toggle)`
  color: #fff;

  &.dropdown-toggle::before {
    display: none;
  }
`;

const HeaderComponent = ({ onMenuClick }: any) => {
  return (
    <Navbar bg="primary" expand="lg">
      <MenuButton variant="link" onClick={onMenuClick}>
        <HamburgerIcon />
      </MenuButton>
      <Title>Real life</Title>
      <Dropdown drop="left">
        <DropdownButton variant="link">
          <AccountCircleIcon />
        </DropdownButton>

        <Dropdown.Menu>
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};

export default HeaderComponent;
