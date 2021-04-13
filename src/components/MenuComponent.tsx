import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListSubheader,
  Select,
  MenuItem as SelectItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import FrameworkContext, { Frameworks } from "state/FrameworkContext";

const useStyles = makeStyles(() => ({
  drawer: {
    "& > div": {
      zIndex: 0,
      top: "64px",
      width: "10em",
      position: "absolute",
      height: "calc(100vh - 64px)",
    },
  },
  select: {
    display: "flex",
    margin: "-0.5em 0.1em 0.5em",
  },
}));

const MenuComponent = ({ onFrameworkChange }: any) => {
  const { pathname } = useLocation();
  const framework = useContext(FrameworkContext);
  const classes = useStyles();

  const onChangeFramework = (event: any) =>
    onFrameworkChange(event.target.value);

  const MenuItem = ({ name, href }: { name: string; href?: string }) => {
    const selected = pathname?.replace("/", "") === name;

    return (
      <ListItem
        button
        component="a"
        href={href ? href : name.toLowerCase()}
        selected={selected}
      >
        {name}
      </ListItem>
    );
  };

  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <List>
        <ListSubheader>Framework</ListSubheader>
        <Select
          value={framework}
          className={classes.select}
          color="primary"
          variant="outlined"
          onChange={onChangeFramework}
        >
          <SelectItem value={Frameworks.AntDesign}>Ant Design</SelectItem>
          <SelectItem value={Frameworks.Bootstrap}>Bootstrap</SelectItem>
          <SelectItem value={Frameworks.ChakraUI}>Chakra UI</SelectItem>
          <SelectItem value={Frameworks.MaterialUi}>Material-UI</SelectItem>
          <SelectItem value={Frameworks.Reakit}>Reakit</SelectItem>
        </Select>

        <Divider />
        <ListSubheader>Components</ListSubheader>
        <MenuItem name="Button" />
        <MenuItem name="Layout" />
        <MenuItem name="Surface" />
        <MenuItem name="Navigation" />
        <MenuItem name="Input" />
        <MenuItem name="Notification" />
        <MenuItem name="Data" />

        <Divider />
        <ListSubheader>Research</ListSubheader>
        <MenuItem name="Theming" />
        <MenuItem name="Component list" href="component-list" />
        <MenuItem name="Conclusion" />
      </List>
    </Drawer>
  );
};

export default MenuComponent;
