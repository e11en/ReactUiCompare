import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles(() => ({
  title: {
    color: "#FFF",
  },
  menu: {
    color: "#FFF",
    ["@media (min-width:540px)"]: { // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
}));

const Bar = styled(AppBar)`
  && {
    background-color: #d78b9c;
  }
`;

const Title = styled.a`
  flex: 1;
  &:hover {
    text-decoration: none;
  }
`;

const CreatedBy = styled.a`
  color: #fff;
  position: absolute;
  right: 7px;
  bottom: 0;
  font-size: small;
`;

const HeaderComponent = ({ onMenuOpen }: any) => {
  const classes = useStyles();

  return (
    <Bar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          className={classes.menu}
          onClick={onMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Title href="/">
          <Typography variant="h6" className={classes.title}>
            React UI Kit Compare
          </Typography>
        </Title>
        <CreatedBy
          href="https://ellenlangelaar.nl"
          target="_blank"
          rel="noreferrer"
        >
          Created by © Ellen Langelaar 04-2021
        </CreatedBy>
      </Toolbar>
    </Bar>
  );
};

export default HeaderComponent;
