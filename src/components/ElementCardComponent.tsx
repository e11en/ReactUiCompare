import { Card, Divider, Typography } from "@material-ui/core";
import styled from "styled-components";

interface ElementCardProps {
  fullwidth?: number;
}

const ElementCard = styled(Card)<ElementCardProps>`
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
