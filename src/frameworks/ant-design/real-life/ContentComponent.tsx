import { useState } from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Steps,
  Button,
  Divider,
  notification,
} from "antd";
import { UndoOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

import { theme } from "./theme";
import PersonalInfo from "./content/PersonalInfoComponent";
import AccountInfo from "./content/AccountInfoComponent";
import Done from "./content/DoneComponent";

const Title = styled(Typography.Title)`
  text-align: center;
`;

const Panel = styled(Card)`
  margin: 1em;
  padding: 1em;
`;

const RightCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

const ResetButton = styled(Button)`
  display: flex;
  align-items: center;
  color: ${theme.secondary};
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
    notification["success"]({
      message: "Registration is complete!",
      style: {
        backgroundColor: "#cbffcd",
      },
    });
    onNext();
  };

  return (
    <Panel>
      <Row>
        <Col span={24}>
          <Title level={2}>Registration form</Title>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Steps current={activeStep}>
            <Steps.Step title="Personal info" />
            <Steps.Step title="Account info" />
            <Steps.Step title="Done" />
          </Steps>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PersonalInfo show={activeStep === 0} />
          <AccountInfo show={activeStep === 1} />
          <Done show={activeStep === 2} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          {activeStep === 2 && (
            <ResetButton icon={<UndoOutlined />} onClick={onReset}>
              Reset
            </ResetButton>
          )}
          {activeStep === 1 && (
            <Button type="text" onClick={onPrev}>
              Previous
            </Button>
          )}
        </Col>
        <RightCol span={12}>
          {activeStep < maxSteps - 1 && (
            <Button type="primary" onClick={onNext}>
              Continue
            </Button>
          )}

          {activeStep === maxSteps - 1 && (
            <Button type="primary" onClick={onSave}>
              Save
            </Button>
          )}
        </RightCol>
      </Row>
    </Panel>
  );
};

export default ContentComponent;
