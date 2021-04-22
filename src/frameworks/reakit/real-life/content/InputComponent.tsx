import { useState } from "react";
import { Input } from "reakit";
import styled from "@emotion/styled";

const Wrapper = styled.div<any>`
  border: 1px solid ${(props) => (props.error ? "#ff4d4f" : "#d9d9d9")};
  position: relative;
  height: 45px;
  margin-bottom: 1em;
`;

const Label = styled.label<any>`
  position: absolute;
  transition: all 200ms;
  transform: ${(props) =>
    props.shrink ? "translate(6px, -2px);" : "translate(4px, 10px)"};
  font-size: ${(props) => (props.shrink ? "small" : "large")};
  color: rgba(0, 0, 0, 0.38);
`;

const StyledInput = styled(Input)`
  border: none;
  position: absolute;
  bottom: 4px;
  width: calc(100% - 8px);
  margin: 0 4px;
  background-color: transparent;

  &:focus {
    outline: none;
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
      <Label shrink={shrink}>{label}</Label>
      <StyledInput
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default InputComponent;
