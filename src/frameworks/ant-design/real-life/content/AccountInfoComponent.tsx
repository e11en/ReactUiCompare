import { useState } from "react";
import { Row, Col, Divider, Switch, Radio } from "antd";
import styled from "@emotion/styled";

import Input from "./InputComponent";
import Date from "./DateInputComponent";

const Wrapper = styled(Row)`
  margin: 2em 0;
`;

const DividerCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const FullHeightDivider = styled(Divider)`
  height: 100%;
`;

const SwitchLabel = styled.label`
  margin: 0 0 1em 0.5em;
`;

const GenderLabel = styled.label`
  display: block;
`;

const PersonalInfoComponent = ({ show }: any) => {
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
    <Wrapper>
      <Col span={8}>
        <Row>
          <Col span={24}>
            <Input label="Username" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              label="Password"
              type="password"
              hasError={error}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              label="Confirm password"
              type="password"
              hasError={error}
              onChange={onConfirmChange}
            />
          </Col>
        </Row>
      </Col>
      <DividerCol span={8}>
        <FullHeightDivider type="vertical" />
      </DividerCol>
      <Col span={8}>
        <Row>
          <Col span={24}>
            <Date label="Birthday" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Switch defaultChecked={true} />
            <SwitchLabel>Receive a gift</SwitchLabel>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <GenderLabel>Gender</GenderLabel>
            <Radio.Group defaultValue="unicorn">
              <Radio value="unicorn">Unicorn</Radio>
              <Radio value="phoenix">Phoenix</Radio>
              <Radio value="bread">Bread</Radio>
            </Radio.Group>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default PersonalInfoComponent;
