import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles(() => ({
  title: {
    color: "#FFF",
  },
}));

const Bar = styled(AppBar)`
  && {
    background-color: #d78b9c;
  }
`;

const HeaderComponent = ({ onFrameworkChange }: any) => {
  const classes = useStyles();

  return (
    <Bar position="static">
      <Toolbar>
        <a href="/">
          <Typography variant="h6" className={classes.title}>
            React UI Kit Compare
          </Typography>
        </a>
      </Toolbar>
    </Bar>
  );
};

export default HeaderComponent;
