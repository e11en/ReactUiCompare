import { useState } from "react";
import {
  Grid,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Input from "./InputComponent";
import CenterDivider from "./CenterDividerComponent";

const useStyles = makeStyles(() => ({
  radioGroup: {
    flexDirection: "row",
  },
}));

const AccountInfoComponent = ({ show }: any) => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onConfirmChange = (e: any) => {
    if (e.target.value === "" || password === e.target.value) {
      setError(false);
      return;
    }

    if (password !== e.target.value) setError(true);
  };

  if (!show) return null;

  return (
    <Grid container item md={12} spacing={3}>
      <Grid container item md={5} spacing={3}>
        <Grid item md={12}>
          <Input label="Username" required />
        </Grid>
        <Grid item md={12}>
          <Input
            label="Password"
            type="password"
            required
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item md={12}>
          <Input
            label="Confirm password"
            type="password"
            required
            onChange={onConfirmChange}
            error={error}
          />
        </Grid>
      </Grid>
      <CenterDivider />
      <Grid container item md={5} spacing={3}>
        <Grid item md={12}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2021-01-01"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item md={12}>
          <FormGroup row>
            <FormControlLabel
              control={<Switch defaultChecked={true} />}
              label="Receive a gift"
            />
          </FormGroup>
        </Grid>
        <Grid item md={12}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup className={classes.radioGroup}>
              <FormControlLabel
                value="unicorn"
                control={<Radio />}
                label="Unicorn"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="phoenix"
                control={<Radio />}
                label="Phoenix"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="bread"
                control={<Radio />}
                label="Bread"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AccountInfoComponent;
