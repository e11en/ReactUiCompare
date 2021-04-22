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

const Title = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

const HeaderComponent = ({ onFrameworkChange }: any) => {
  const classes = useStyles();

  return (
    <Bar position="static">
      <Toolbar>
        <Title href="/">
          <Typography variant="h6" className={classes.title}>
            React UI Kit Compare
          </Typography>
        </Title>
      </Toolbar>
    </Bar>
  );
};

export default HeaderComponent;
