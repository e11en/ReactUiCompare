import { useState, cloneElement } from "react";
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
    props.shrink ? "translate(10px, 0px);" : "translate(10px, 7px)"};
  font-size: ${(props) => (props.shrink ? "small" : "large")};
  color: rgba(0, 0, 0, 0.38);
`;

const BaseInputComponent = ({
  label,
  shrinkLabel = false,
  hasError,
  children,
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

  const onChange = (e: any, other: any) => {
    if (e?.target?.value || other) setHasValue(true);
    else setHasValue(false);

    if (props.onChange) props.onChange(e, other);
  };

  return (
    <Wrapper error={hasError}>
      <Label shrink={shrink}>{label}</Label>
      {cloneElement(children, {
        size: "lg",
        ...props,
        onFocus: onFocus,
        onBlur: onBlur,
        onChange: onChange,
        bordered: false,
      })}
    </Wrapper>
  );
};

export default BaseInputComponent;
