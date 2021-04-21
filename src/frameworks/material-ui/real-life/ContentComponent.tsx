import { useState } from "react";
import {
  Typography,
  Paper,
  Grid,
  Divider,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReplayIcon from "@material-ui/icons/Replay";

import PersonalInfo from "./content/PersonalInfoComponent";
import AccountInfo from "./content/AccountInfoComponent";
import Done from "./content/DoneComponent";
import Alert from "./content/AlertComponent";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "1em",
    margin: "2em",
  },
  title: {
    textAlign: "center",
  },
}));

const ContentComponent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const maxSteps = 2;

  const onNext = () => {
    const next = activeStep + 1;

    if (next <= maxSteps + 1) setActiveStep(activeStep + 1);
  };

  const onPrev = () => {
    const prev = activeStep - 1;

    if (prev >= 0) setActiveStep(activeStep - 1);
  };

  const onReset = () => {
    setActiveStep(0);
  };

  const onSave = () => {
    setShowAlert(true);
    onNext();
  };

  return (
    <Paper className={classes.paper}>
      <Alert show={showAlert} onClose={() => setShowAlert(false)}>
        Registration is complete!
      </Alert>

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h4" className={classes.title}>
            Registration form
          </Typography>
          <Divider />
        </Grid>
        <Grid item md={12}>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>Personal info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Account info</StepLabel>
            </Step>
            <Step completed={activeStep === maxSteps}>
              <StepLabel>Done</StepLabel>
            </Step>
          </Stepper>
        </Grid>
        <Grid item md={12}>
          <Divider />
        </Grid>

        <PersonalInfo show={activeStep === 0} />
        <AccountInfo show={activeStep === 1} />
        <Done show={activeStep === 2} />

        <Grid container item md={12}>
          <Grid item md={6}>
            {activeStep === 2 && (
              <Button color="secondary" onClick={onReset}>
                <ReplayIcon /> Reset
              </Button>
            )}
            {activeStep === 1 && (
              <Button color="primary" onClick={onPrev}>
                Previous
              </Button>
            )}
          </Grid>
          <Grid item md={6} container justify="flex-end">
            {activeStep < maxSteps - 1 && (
              <Button variant="contained" color="secondary" onClick={onNext}>
                Continue
              </Button>
            )}

            {activeStep === maxSteps - 1 && (
              <Button variant="contained" color="secondary" onClick={onSave}>
                Save
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContentComponent;
