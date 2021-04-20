import { forwardRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 1em;
  border: 1px solid #d6d6d6;
  min-height: 55em;
  overflow: auto;
  min-width: 250px;
  background-color: #edf4f7;
`;

const PageWrapperComponent = forwardRef(
  ({ children, ...props }: any, ref: any) => (
    <Wrapper {...props} ref={ref}>
      {children}
    </Wrapper>
  )
);

export default PageWrapperComponent;
