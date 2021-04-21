import { Button as BButton, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const NormalButtons = () => {
  return (
    <ElementCard title="Normal buttons">
      <SpacedChildren>
        <BButton variant="primary">Primary</BButton>
        <BButton variant="primary" disabled>
          Disabled
        </BButton>
        <BButton variant="secondary">Secondary</BButton>
        <BButton variant="success">Success</BButton>
        <BButton variant="warning">Warning</BButton>
        <BButton variant="danger">Danger</BButton>
        <BButton variant="info">Info</BButton>
        <BButton variant="light">Light</BButton>
        <BButton variant="dark">Dark</BButton>
        <BButton variant="link">Link</BButton>
        <BButton variant="outline-primary">Outlined</BButton>
      </SpacedChildren>
      <Code>
        {`
          <Button variant="primary">Primary</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline-primary">Outlined</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonVariations = () => {
  return (
    <ElementCard title="Other button variations">
      <div>
        <BButton variant="primary" size="lg" block>
          Block button
        </BButton>
      </div>
      <Code>
        {`
          <Button variant="primary" size="lg" block>Block button</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonSizes = () => {
  return (
    <ElementCard title="Button sizes">
      <SpacedChildren>
        <BButton variant="primary" size="sm">
          Small
        </BButton>
        <BButton variant="primary">Medium</BButton>
        <BButton variant="primary" size="lg">
          Large
        </BButton>
      </SpacedChildren>
      <Code>
        {`
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonGroups = () => {
  return (
    <ElementCard title="Button groups">
      <SpacedChildren>
        <ButtonGroup>
          <BButton>One</BButton>
          <BButton>Two</BButton>
          <BButton>Three</BButton>
        </ButtonGroup>

        <ButtonGroup vertical>
          <BButton variant="outline-primary">One</BButton>
          <BButton variant="outline-primary">Two</BButton>
          <BButton variant="outline-primary">Three</BButton>
        </ButtonGroup>
      </SpacedChildren>
      <Code>
        {`
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <ButtonGroup vertical>
            <Button variant="outline-primary">One</Button>
            <Button variant="outline-primary">Two</Button>
            <Button variant="outline-primary">Three</Button>
          </ButtonGroup>
        `}
      </Code>
    </ElementCard>
  );
};

export const Button = () => {
  return (
    <FlexWrapper>
      <NormalButtons />
      <ButtonVariations />
      <ButtonSizes />
      <ButtonGroups />
    </FlexWrapper>
  );
};
