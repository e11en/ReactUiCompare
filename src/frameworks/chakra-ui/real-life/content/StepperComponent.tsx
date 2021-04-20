import { useState, useEffect } from "react";
import { Circle, Divider, HStack, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Step = ({ step, active, complete }: any) => (
  <Circle
    size="30px"
    bgColor={active || complete ? "primary.500" : "rgba(0, 0, 0, 0.38)"}
    color="white"
  >
    {complete && <CheckIcon />}
    {!complete && step}
  </Circle>
);

const initialStepState = {
  0: {
    active: true,
    complete: false,
  },
  1: {
    active: false,
    complete: false,
  },
  2: {
    active: false,
    complete: false,
  },
};

const StepperComponent = ({ activeStep }: any) => {
  const [stepState, setStepState] = useState<any>(initialStepState);

  useEffect(() => {
    // Least efficient award goes to...
    switch (activeStep) {
      case 0:
        setStepState(initialStepState);
        break;
      case 1:
        setStepState({
          ...initialStepState,
          0: {
            active: true,
            complete: true,
          },
          1: {
            active: true,
            complete: false,
          },
        });
        break;
      case 2:
        setStepState({
          ...initialStepState,
          0: {
            active: true,
            complete: true,
          },
          1: {
            active: true,
            complete: true,
          },
          2: {
            active: true,
            complete: true,
          },
        });
        break;
    }
  }, [activeStep]);

  return (
    <HStack p="0 1em">
      <Step
        step={1}
        active={stepState[0].active}
        complete={stepState[0].complete}
      />
      <Text>Personal info</Text>
      <Divider />
      <Step
        step={2}
        active={stepState[1].active}
        complete={stepState[1].complete}
      />
      <Text>Account info</Text>
      <Divider />
      <Step
        step={3}
        active={stepState[2].active}
        complete={stepState[2].complete}
      />
      <Text>Done</Text>
    </HStack>
  );
};

export default StepperComponent;
