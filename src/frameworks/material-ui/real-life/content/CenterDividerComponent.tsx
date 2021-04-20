import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  centerDivider: {
    display: "flex",
    justifyContent: "center",
  },
}));

const CenterDividerComponent = () => {
  const classes = useStyles();

  return (
    <Grid item md={2} className={classes.centerDivider}>
      <Divider orientation="vertical" />
    </Grid>
  );
};

export default CenterDividerComponent;
