import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

import FrameworkContext from "../state/FrameworkContext";

const useStyles = makeStyles(() => ({
  select: {
    color: "#FFF",
    "& > *": {
      color: "#FFF",
    },
    "&::before": {
      borderColor: "#FFF",
    },
    "&:hover::before": {
      borderColor: "#FFF",
    },
  },
}));

const FrameworkSelect = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const HeaderComponent = ({ onFrameworkChange }: any) => {
  const classes = useStyles();
  const framework = useContext(FrameworkContext);

  const onChangeFramework = (event: any) =>
    onFrameworkChange(event.target.value);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">React UI Kit Compare</Typography>

        <FrameworkSelect>
          <Select
            value={framework}
            className={classes.select}
            color="secondary"
            onChange={onChangeFramework}
          >
            <MenuItem value="material-ui">Material-UI</MenuItem>
            <MenuItem value="ant-design">Ant Design</MenuItem>
          </Select>
        </FrameworkSelect>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
