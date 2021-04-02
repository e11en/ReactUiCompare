import { Card, Divider, Typography } from "@material-ui/core";
import styled from "styled-components";

interface ElementCardProps {
  fullwidth?: number;
}

const ElementCard = styled(Card)<ElementCardProps>`
  height: 100%;
  padding: 1em;
  margin: 1em 1em 1em 0;
  width: ${(props) => (props.fullwidth ? "100vw" : "825px")};

  & > div {
    margin-bottom: 1em;
  }
`;

const TitleDivider = styled(Divider)`
  margin-bottom: 1em;
`;

export const GreyBox = styled.div`
  background-color: #d6d6d6;
  display: flex;
  padding: 1em;
  justify-content: center;

  & > div:nth-child(2) {
    margin: 0 8px;
  }
`;

interface ElementCardComponentProperties {
  fullwidth?: boolean;
  title?: string;
  children?: React.ReactNode;
}

const ElementCardComponent = ({
  fullwidth,
  title,
  children,
}: ElementCardComponentProperties) => {
  return (
    <ElementCard fullwidth={fullwidth ? 1 : 0}>
      <Typography variant="h6">{title}</Typography>
      <TitleDivider />
      {children}
    </ElementCard>
  );
};

export default ElementCardComponent;
