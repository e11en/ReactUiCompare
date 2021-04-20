import {
  Flex,
  Text,
  IconButton,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const HeaderComponent = ({ onMenuClick }: any) => {
  return (
    <Flex
      w="100%"
      bgColor="primary.500"
      color="white"
      alignItems="center"
      h="64px"
      padding="0 24px"
    >
      <IconButton
        aria-label="Menu"
        colorScheme="primary"
        icon={<HamburgerIcon />}
        onClick={onMenuClick}
      />
      <Text fontSize="3xl" flex="1">
        Real life
      </Text>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Account"
          colorScheme="primary"
          icon={<Icon as={AccountCircleIcon} />}
        />
        <MenuList color="black">
          <MenuItem>Account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default HeaderComponent;
