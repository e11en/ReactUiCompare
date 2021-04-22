import { useState, useEffect } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

import { theme } from "../theme";
import Divider from "./DividerComponent";

const Wrapper = styled.div`
  display: flex;
`;

const StepCircle = styled.div<any>`
  width: 30px;
  height: 30px;
  background-color: ${(props) =>
    props.active || props.complete ? theme.primary : "rgba(0, 0, 0, 0.38)"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 0 0 6px;
  }
`;

const Step = ({ step, active, complete, label }: any) => (
  <StepWrapper>
    <StepCircle complete={complete} active={active}>
      {complete && <CheckIcon />}
      {!complete && step}
    </StepCircle>
    <p>{label}</p>
  </StepWrapper>
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
    <Wrapper>
      <Step
        step={1}
        active={stepState[0].active}
        complete={stepState[0].complete}
        label="Personal info"
      />
      <Divider />
      <Step
        step={2}
        active={stepState[1].active}
        complete={stepState[1].complete}
        label="Account info"
      />
      <Divider />
      <Step
        step={3}
        active={stepState[2].active}
        complete={stepState[2].complete}
        label="Done"
      />
    </Wrapper>
  );
};

export default StepperComponent;
