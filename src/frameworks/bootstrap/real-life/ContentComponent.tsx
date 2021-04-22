import { useState } from "react";
import styled from "@emotion/styled";
import { Card, Button, Row, Col } from "react-bootstrap";
import { RepeatIcon } from "@chakra-ui/icons";

import { theme } from "./theme";
import Stepper from "frameworks/reakit/real-life/content/StepperComponent";
import PersonalInfo from "./content/PersonalInfoComponent";
import AccountInfo from "./content/AccountInfoComponent";
import Done from "./content/DoneComponent";

const Paper = styled(Card)`
  margin: 1em;
  padding: 1em;
`;

const Title = styled.h3`
  text-align: center;
`;

const FlexEndCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  color: ${theme.secondary};

  svg {
    margin-right: 8px;
  }
`;

const Link = styled(Button)`
  color: ${theme.primary};
`;

const ContentComponent = () => {
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
    onNext();
  };

  return (
    <Paper>
      <Title>Registration form</Title>
      <hr />

      {/* Cheeky borrow from Reakit where I also needed to build the stepper from scratch #DRY */}
      <Stepper activeStep={activeStep} />

      <PersonalInfo show={activeStep === 0} />
      <AccountInfo show={activeStep === 1} />
      <Done show={activeStep === 2} />

      <Row>
        <Col>
          {activeStep === 2 && (
            <IconButton variant="link" onClick={onReset}>
              <RepeatIcon />
              Reset
            </IconButton>
          )}
          {activeStep === 1 && (
            <Link variant="link" onClick={onPrev}>
              Previous
            </Link>
          )}
        </Col>
        <FlexEndCol>
          {activeStep < maxSteps - 1 && (
            <Button variant="secondary" onClick={onNext}>
              Continue
            </Button>
          )}

          {activeStep === maxSteps - 1 && (
            <Button variant="secondary" onClick={onSave}>
              Continue
            </Button>
          )}
        </FlexEndCol>
      </Row>
    </Paper>
  );
};

export default ContentComponent;
