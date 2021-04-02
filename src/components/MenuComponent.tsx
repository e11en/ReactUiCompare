import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListSubheader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  drawer: {
    "& > div": {
      top: "64px",
      width: "10em",
      position: "absolute",
    },
  },
}));

const MenuComponent = () => {
  const { pathname } = useLocation();
  const classes = useStyles();

  const MenuItem = ({ name }: { name: string }) => {
    const selected = pathname?.replace("/", "") === name;

    return (
      <ListItem
        button
        component="a"
        href={name.toLowerCase()}
        selected={selected}
      >
        {name}
      </ListItem>
    );
  };

  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <List>
        <MenuItem name="Button" />
        <MenuItem name="Layout" />
        <MenuItem name="Surface" />
        <MenuItem name="Navigation" />
        <MenuItem name="Theming" />

        <Divider />
        <ListSubheader>Form</ListSubheader>
        <MenuItem name="Input" />
        <MenuItem name="Select" />
        <MenuItem name="Datepicker" />

        <Divider />
        <ListSubheader>Data</ListSubheader>
        <MenuItem name="Table" />
        <MenuItem name="Graphs & charts" />

        <Divider />
        <ListSubheader>Notification</ListSubheader>
        <MenuItem name="Alert" />
        <MenuItem name="Popup" />
      </List>
    </Drawer>
  );
};

export default MenuComponent;
