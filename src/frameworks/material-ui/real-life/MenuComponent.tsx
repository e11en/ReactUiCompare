import { Drawer, List, ListItem } from "@material-ui/core";
import styled from "styled-components";

const Logo = styled.div`
  height: 5em;
  display: flex;
  justify-content: center;
  padding: 1em;

  img {
    height: 100%;
  }
`;

const MenuComponent = ({ open, onClose }: any) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{ style: { position: "absolute" } }}
      ModalProps={{
        container: document.getElementById("page-wrapper"),
        style: { position: "absolute" },
      }}
      BackdropProps={{ style: { position: "absolute" } }}
    >
      <List
        subheader={
          <Logo>
            <img
              src="https://ellenlangelaar.nl/img/ellenlangelaar.png"
              alt="logo"
            />
          </Logo>
        }
      >
        <ListItem button>Account</ListItem>
        <ListItem button>Another menu item</ListItem>
      </List>
    </Drawer>
  );
};

export default MenuComponent;
