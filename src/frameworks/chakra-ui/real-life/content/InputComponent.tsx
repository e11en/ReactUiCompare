import { useState } from "react";
import { Input } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Label = styled.label<any>`
  position: absolute;
  transition: all 200ms;
  transform: ${(props) =>
    props.shrink ? "translate(17px, -2px);" : "translate(15px, 10px)"};
  font-size: ${(props) => (props.shrink ? "small" : "large")};
  color: rgba(0, 0, 0, 0.38);
`;

const InputComponent = ({ label, shrinkLabel = false, ...props }: any) => {
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
    <>
      <Label shrink={shrink}>{label}</Label>
      <Input
        borderRadius="2px"
        size="lg"
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    </>
  );
};

export default InputComponent;
