import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "2px",
    },
    "& label.MuiInputLabel-shrink": {
      transform: "translate(14px, 0px) scale(0.75)",
    },
    "& fieldset legend": {
      display: "none",
    },
  },
}));

const InputComponent = (props: any) => {
  const classes = useStyles();

  return (
    <TextField className={classes.textField} variant="outlined" {...props} />
  );
};

export default InputComponent;
