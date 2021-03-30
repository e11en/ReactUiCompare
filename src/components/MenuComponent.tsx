import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListSubheader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  drawer: {
    "& > div": {
      top: "64px",
      width: "10em",
    },
  },
}));

const MenuComponent = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <List>
        <ListItem button component="a" href="button">
          Button
        </ListItem>
        <ListItem button component="a" href="layout">
          Layout
        </ListItem>
        <ListItem button component="a">
          Header
        </ListItem>
        <ListItem button component="a">
          Menu
        </ListItem>
        <ListItem button component="a">
          Theming
        </ListItem>

        <Divider />
        <ListSubheader>Form</ListSubheader>
        <ListItem button component="a">
          Input
        </ListItem>
        <ListItem button component="a">
          Select
        </ListItem>
        <ListItem button component="a">
          Datepicker
        </ListItem>

        <Divider />
        <ListSubheader>Data</ListSubheader>
        <ListItem button component="a">
          Table
        </ListItem>
        <ListItem button component="a">
          Graphs & charts
        </ListItem>

        <Divider />
        <ListSubheader>Notification</ListSubheader>
        <ListItem button component="a">
          Alert
        </ListItem>
        <ListItem button component="a">
          Popup
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MenuComponent;
