import { DatePicker } from "antd";
import styled from "@emotion/styled";

import BaseInput from "./BaseInputComponent";

const WrappedInput = styled(DatePicker)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const InputComponent = (props: any) => {
  return (
    <BaseInput {...props}>
      <WrappedInput placeholder="" />
    </BaseInput>
  );
};

export default InputComponent;
