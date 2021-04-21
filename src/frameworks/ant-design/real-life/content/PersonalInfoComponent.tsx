import { Row, Col, Divider } from "antd";
import styled from "@emotion/styled";

import Input from "./InputComponent";

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

const PersonalInfoComponent = ({ show }: any) => {
  if (!show) return null;

  return (
    <Wrapper>
      <Col span={8}>
        <Row>
          <Col span={24}>
            <Input label="First name" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input label="Last name" />
          </Col>
        </Row>
      </Col>
      <DividerCol span={8}>
        <FullHeightDivider type="vertical" />
      </DividerCol>
      <Col span={8}>
        <Row>
          <Col span={24}>
            <Input label="Street" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input label="City" />
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default PersonalInfoComponent;
