import { Card, Divider, Typography } from "@material-ui/core";
import styled from "styled-components";

const ElementCard = styled(Card)`
  padding: 1em;
  margin: 1em 1em 1em 0;
  width: 825px;
`;

const TitleDivider = styled(Divider)`
  margin-bottom: 1em;
`;

interface ElementCardComponentProperties {
  title?: string;
  children?: React.ReactNode;
}

const ElementCardComponent = ({
  title,
  children,
}: ElementCardComponentProperties) => {
  return (
    <ElementCard>
      <Typography variant="h6">{title}</Typography>
      <TitleDivider />
      {children}
    </ElementCard>
  );
};

export default ElementCardComponent;
