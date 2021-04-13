import { Badge, Carousel } from "react-bootstrap";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Avatars = () => {
  return (
    <ElementCard title="Avatar">
      <SpacedChildren>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="primary" pill>
          Pill
        </Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="light">Light</Badge>
        <Badge variant="dark">Dark</Badge>
      </SpacedChildren>
      <Code>
        {`
          <Badge variant="primary">Primary</Badge>
          <Badge variant="primary" pill>Pill</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="light">Light</Badge>
          <Badge variant="dark">Dark</Badge>
        `}
      </Code>
    </ElementCard>
  );
};

const Badges = () => {
  return (
    <ElementCard title="Badge">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Chips = () => {
  return (
    <ElementCard title="Chip">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Lists = () => {
  return (
    <ElementCard title="List">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Tables = () => {
  return (
    <ElementCard title="Table">
      <div></div>
      <Code>
        {`

        `}
      </Code>
    </ElementCard>
  );
};

const Carousels = () => {
  return (
    <ElementCard title="Carousel">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://via.placeholder.com/800x400"
              alt="Item 1"
            />
            <Carousel.Caption>Item 1</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://via.placeholder.com/800x400"
              alt="Item 2"
            />
            <Carousel.Caption>Item 2</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://via.placeholder.com/800x400"
              alt="Item 3"
            />
            <Carousel.Caption>Item 3</Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Code>
        {`
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/800x400"
                alt="Item 1"
              />
              <Carousel.Caption>Item 1</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/800x400"
                alt="Item 2"
              />
              <Carousel.Caption>Item 2</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/800x400"
                alt="Item 3"
              />
              <Carousel.Caption>Item 3</Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        `}
      </Code>
    </ElementCard>
  );
};

export const Data = () => {
  return (
    <FlexWrapper>
      <Avatars />
      <Badges />
      <Chips />
      <Lists />
      <Tables />
      <Carousels />
    </FlexWrapper>
  );
};
