import styled from "@emotion/styled";

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

const PersonalInfoComponent = ({ show }: any) => {
  if (!show) return null;

  return (
    <Wrapper>
      <Box>
        <Input label="First name" />
        <Input label="Last name" />
      </Box>
      <DividerWrapper>
        {/* Another cheeky borrow from Reakit where I also needed to build the divider from scratch #DRY */}
        <Divider orientation="vertical" />
      </DividerWrapper>
      <Box>
        <Input label="Street" />
        <Input label="City" />
      </Box>
    </Wrapper>
  );
};

export default PersonalInfoComponent;
