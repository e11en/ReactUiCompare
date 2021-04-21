import { Input } from "antd";
import styled from "@emotion/styled";

import BaseInput from "./BaseInputComponent";

const WrappedInput = styled(Input)`
  position: absolute;
  bottom: 0;
`;

const InputComponent = (props: any) => {
  return (
    <BaseInput {...props}>
      <WrappedInput />
    </BaseInput>
  );
};

export default InputComponent;
