import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  list: {
    "& a": {
      color: theme.palette.secondary.main,
    },
    "& a:hover": {
      color: theme.palette.secondary.dark,
    },
  },
}));

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="primary" className={classes.appBar}>
      <Toolbar>
        <List className={classes.list}>
          <a target="_blank" rel="noreferrer" href="https://ellenlangelaar.nl">
            Portfolio
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://blog.ellenlangelaar.nl"
          >
            Blog
          </a>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default FooterComponent;
