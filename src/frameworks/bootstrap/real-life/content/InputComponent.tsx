import { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "@emotion/styled";

const Wrapper = styled.div<any>`
  border: 1px solid ${(props) => (props.error ? "#ff4d4f" : "#d9d9d9")};
  position: relative;
  height: 45px;
  margin-bottom: 1em;
  border-radius: 2px;
`;

const Label = styled(Form.Label)<any>`
  position: absolute;
  transition: all 200ms;
  transform: ${(props) =>
    props.shrink ? "translate(12px, -2px);" : "translate(10px, 10px)"};
  font-size: ${(props) => (props.shrink ? "small" : "large")};
  color: rgba(0, 0, 0, 0.38);
`;

const Input = styled(Form.Control)<any>`
  border: none;
  position: absolute;
  bottom: 0;
  background-color: transparent;

  &:focus {
    background-color: transparent;
    box-shadow: none;
  }
`;

const InputComponent = ({
  label,
  shrinkLabel = false,
  error,
  ...props
}: any) => {
  const [shrink, setShrink] = useState(shrinkLabel || props.value);
  const [hasValue, setHasValue] = useState(props.value);

  const onFocus = (e: any) => {
    if (!shrinkLabel) setShrink(true);

    if (props.onFocus) props.onFocus(e);
  };

  const onBlur = (e: any) => {
    if (!shrinkLabel && !hasValue) setShrink(false);

    if (props.onBlur) props.onBlur(e);
  };

  const onChange = (e: any) => {
    if (e.target.value) setHasValue(true);
    else setHasValue(false);

    if (props.onChange) props.onChange(e);
  };

  return (
    <Wrapper error={error}>
      <Label shrink={shrink ? 1 : 0}>{label}</Label>
      <Input {...props} onFocus={onFocus} onBlur={onBlur} onChange={onChange} />
    </Wrapper>
  );
};

export default InputComponent;
