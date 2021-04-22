import { useState } from "react";
import styled from "@emotion/styled";
import { Form } from "react-bootstrap";

import Divider from "frameworks/reakit/real-life/content/DividerComponent";
import Input from "./InputComponent";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 1em 0;
`;

const Box = styled.div`
  width: 60em;
`;

const DividerWrapper = styled.div`
  width: 100%;

  & > div {
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

const AccountInfoComponent = ({ show }: any) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);

  const onConfirmChange = (e: any) => {
    if (e.target.value === "" || password === e.target.value) {
      setError(0);
      return;
    }

    if (password !== e.target.value) setError(1);
  };

  if (!show) return null;

  return (
    <Wrapper>
      <Box>
        <Input placeholder="Username" />
        <Input
          type="password"
          label="Password"
          onChange={(e: any) => setPassword(e.target.value)}
          error={error}
        />
        <Input
          type="password"
          label="Confirm password"
          onChange={onConfirmChange}
          error={error}
        />
      </Box>
      <DividerWrapper>
        {/* Another cheeky borrow from Reakit where I also needed to build the divider from scratch #DRY */}
        <Divider orientation="vertical" />
      </DividerWrapper>
      <Box>
        <Input label="Birthday" type="date" shrinkLabel={true} />
        <Form.Check
          type="switch"
          id="get-gift-switch"
          label="Receive a gift"
          defaultChecked={true}
        />

        <label>Gender</label>
        <div>
          <Form.Check inline label="Unicorn" type="radio" />
          <Form.Check inline label="Phoenix" type="radio" />
          <Form.Check inline label="Bread" type="radio" />
        </div>
      </Box>
    </Wrapper>
  );
};

export default AccountInfoComponent;
