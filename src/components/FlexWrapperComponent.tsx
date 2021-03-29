import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface FlexWrapperComponentProperties {
  children?: React.ReactNode;
}

const FlexWrapperComponent = ({ children }: FlexWrapperComponentProperties) => (
  <Wrapper>{children}</Wrapper>
);

export default FlexWrapperComponent;
