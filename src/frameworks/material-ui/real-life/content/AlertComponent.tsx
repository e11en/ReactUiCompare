import { Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  alert: {
    top: "172px",
    right: "42px",
    "& .MuiSnackbarContent-root": {
      backgroundColor: "#4caf50",
    },
  },
}));

const AlertComponent = ({ show, onClose, children }: any) => {
  const classes = useStyles();

  return (
    <Snackbar
      className={classes.alert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={show}
      onClose={onClose}
      message={children}
    />
  );
};

export default AlertComponent;
