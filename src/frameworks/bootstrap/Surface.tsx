import { Card, Accordion, Navbar } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const SmallCard = styled(Card)`
  width: 286px;

  img {
    height: 180px;
  }
`;

const AppToolBar = () => {
  return (
    <ElementCard title="App tool bar">
      <div>
        <Navbar bg="light">
          <Navbar.Brand>Light navbar</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Some content</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <Navbar bg="dark">
          <Navbar.Brand>Dark navbar</Navbar.Brand>
        </Navbar>
      </div>
      <Code>
        {`
          <Navbar bg="light">
            <Navbar.Brand>Light navbar</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Some content</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>

          <Navbar bg="dark">
            <Navbar.Brand>Dark navbar</Navbar.Brand>
          </Navbar>
        `}
      </Code>
    </ElementCard>
  );
};

const Cards = () => {
  return (
    <ElementCard title="Card">
      <SpacedChildren>
        <SmallCard>
          <Card.Header>Some header</Card.Header>
          <Card.Img variant="top" src="http://via.placeholder.com/286x180" />
          <Card.Body>
            <Card.Title>Some card</Card.Title>
            <Card.Text>Some content.</Card.Text>
            <Card.Link href="#">Some link</Card.Link>
          </Card.Body>
        </SmallCard>

        <SmallCard>
          <Card.Img variant="top" src="http://via.placeholder.com/286x180" />
          <Card.ImgOverlay>
            <Card.Title>Some image overlay card</Card.Title>
            <Card.Text>Some content.</Card.Text>
            <Card.Link href="#">Some link</Card.Link>
          </Card.ImgOverlay>
        </SmallCard>
      </SpacedChildren>
      <Code>
        {`
          <Card>
            <Card.Header>Some header</Card.Header>
            <Card.Img variant="top" src="http://via.placeholder.com/286x180" />
            <Card.Body>
              <Card.Title>Some card</Card.Title>
              <Card.Text>Some content.</Card.Text>
              <Card.Link href="#">Some link</Card.Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="http://via.placeholder.com/286x180" />
            <Card.ImgOverlay>
              <Card.Title>Some image overlay card</Card.Title>
              <Card.Text>Some content.</Card.Text>
            </Card.ImgOverlay>
          </Card>
        `}
      </Code>
    </ElementCard>
  );
};

const Accordions = () => {
  return (
    <ElementCard title="Accordion">
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Accordion 1
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Some text</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Accordion 2
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Some text</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <Code>
        {`
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Accordion 1
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Some text</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Accordion 2
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Some text</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        `}
      </Code>
    </ElementCard>
  );
};

export const Surface = () => {
  return (
    <FlexWrapper>
      <AppToolBar />
      <Cards />
      <Accordions />
    </FlexWrapper>
  );
};
