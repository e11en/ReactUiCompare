import { Grid } from "@material-ui/core";

import Input from "./InputComponent";
import CenterDivider from "./CenterDividerComponent";

const PersonalInfoComponent = ({ show }: any) => {
  if (!show) return null;

  return (
    <Grid container item md={12} spacing={3}>
      <Grid container item md={5} spacing={3}>
        <Grid item md={12}>
          <Input label="First name" />
        </Grid>
        <Grid item md={12}>
          <Input label="Last name" />
        </Grid>
      </Grid>
      <CenterDivider />
      <Grid container item md={5} spacing={3}>
        <Grid item md={12}>
          <Input label="Street" />
        </Grid>
        <Grid item md={12}>
          <Input label="City" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalInfoComponent;
