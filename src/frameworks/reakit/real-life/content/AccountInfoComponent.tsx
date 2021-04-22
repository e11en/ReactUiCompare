import {
  useRadioState,
  Radio,
  RadioGroup,
  useCheckboxState,
  Checkbox,
} from "reakit";
import { useState } from "react";
import styled from "@emotion/styled";

import Input from "./InputComponent";
import Divider from "./DividerComponent";

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

const RadioBox = styled.label`
  margin-right: 8px;
`;

const CheckboxBox = styled.label`
  input {
    margin-right: 8px;
  }
`;

const AccountInfoComponent = ({ show }: any) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);
  const radio = useRadioState();
  const checkbox = useCheckboxState({ state: true });

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
        <Input label="Username" />
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
        <Divider orientation="vertical" />
      </DividerWrapper>
      <Box>
        <Input label="Birthday" type="date" shrinkLabel={true} />
        <CheckboxBox>
          <Checkbox {...checkbox} />
          Receive a gift
        </CheckboxBox>

        <label>Gender</label>
        <RadioGroup {...radio} aria-label="gender">
          <RadioBox>
            <Radio {...radio} value="unicorn" /> Unicorn
          </RadioBox>
          <RadioBox>
            <Radio {...radio} value="phoenix" /> Phoenix
          </RadioBox>
          <RadioBox>
            <Radio {...radio} value="bread" /> Bread
          </RadioBox>
        </RadioGroup>
      </Box>
    </Wrapper>
  );
};

export default AccountInfoComponent;
