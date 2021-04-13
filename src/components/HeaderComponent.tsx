import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    color: "#FFF",
  },
}));

const HeaderComponent = ({ onFrameworkChange }: any) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <a href="/">
          <Typography variant="h6" className={classes.title}>
            React UI Kit Compare
          </Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
