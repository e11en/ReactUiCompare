import { useState } from "react";
import { Button, useDialogState } from "reakit";
import { RepeatIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

import { theme } from "./theme";
import MessageBox from "./content/MessageBoxComponent";
import Stepper from "./content/StepperComponent";
import PersonalInfo from "./content/PersonalInfoComponent";
import AccountInfo from "./content/AccountInfoComponent";
import Done from "./content/DoneComponent";

const Paper = styled.div`
  margin: 1em;
  padding: 1em;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  border-radius: 2px;
`;

const Title = styled.h3`
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const RightButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BaseButton = styled(Button)`
  border: none;
  padding: 6px 1em;
  border-radius: 2px;
`;

const PrimaryButton = styled(BaseButton)`
  color: #fff;
  background-color: ${theme.secondary};

  &:hover {
    background-color: #ea6433;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  color: ${theme.primary};

  &:hover {
    background-color: #f7f7f7;
  }
`;

const IconButton = styled(SecondaryButton)`
  color: ${theme.secondary};
  display: flex;
  align-items: center;

  svg {
    margin-right: 6px;
  }
`;

const ContentComponent = () => {
  const dialog = useDialogState();
  const [activeStep, setActiveStep] = useState(0);
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
    dialog.show();
    onNext();
  };

  return (
    <Paper>
      <MessageBox
        dialog={dialog}
        color="#cbffcd"
        label="Completed"
        message="Registration is complete!"
      />

      <Title>Registration form</Title>
      <hr />

      <Stepper activeStep={activeStep} />

      <PersonalInfo show={activeStep === 0} />
      <AccountInfo show={activeStep === 1} />
      <Done show={activeStep === 2} />

      <ButtonWrapper>
        <div>
          {activeStep === 2 && (
            <IconButton onClick={onReset}>
              <RepeatIcon />
              Reset
            </IconButton>
          )}
          {activeStep === 1 && (
            <SecondaryButton onClick={onPrev}>Previous</SecondaryButton>
          )}
        </div>
        <RightButtonWrapper>
          {activeStep < maxSteps - 1 && (
            <PrimaryButton onClick={onNext}>Continue</PrimaryButton>
          )}

          {activeStep === maxSteps - 1 && (
            <PrimaryButton onClick={onSave}>Continue</PrimaryButton>
          )}
        </RightButtonWrapper>
      </ButtonWrapper>
    </Paper>
  );
};

export default ContentComponent;
