import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Button,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { RepeatIcon } from "@chakra-ui/icons";

import Stepper from "./content/StepperComponent";
import PersonalInfo from "./content/PersonalInfoComponent";
import AccountInfo from "./content/AccountInfoComponent";
import Done from "./content/DoneComponent";

const boxStyle = css`
  background-color: #fff;
  padding: 1em;
  margin: 1em;
  border: 1px solid var(--chakra-colors-gray-200);
  border-radius: 2px;
`;

const ContentComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const toast = useToast();
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
    toast({
      title: "Registration is complete!",
      status: "success",
      duration: 9000,
      position: "top-right",
      isClosable: true,
    });
    onNext();
  };

  return (
    <Box css={boxStyle}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem colSpan={3}>
          <Heading as="h6" textAlign="center" marginBottom="0.5em">
            Registration form
          </Heading>
          <Divider />
        </GridItem>
        <GridItem colSpan={3}>
          <Stepper activeStep={activeStep} />
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <PersonalInfo show={activeStep === 0} />
          <AccountInfo show={activeStep === 1} />
          <Done show={activeStep === 2} />
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <Grid templateColumns="repeat(2, 1fr)">
            <Box>
              {activeStep === 2 && (
                <Button
                  variant="ghost"
                  onClick={onReset}
                  leftIcon={<RepeatIcon />}
                  color="secondary.500"
                >
                  Reset
                </Button>
              )}
              {activeStep === 1 && (
                <Button variant="ghost" onClick={onPrev}>
                  Previous
                </Button>
              )}
            </Box>
            <Box display="flex" justifyContent="flex-end">
              {activeStep < maxSteps - 1 && (
                <Button variant="primary" onClick={onNext}>
                  Continue
                </Button>
              )}

              {activeStep === maxSteps - 1 && (
                <Button variant="primary" onClick={onSave}>
                  Continue
                </Button>
              )}
            </Box>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ContentComponent;
