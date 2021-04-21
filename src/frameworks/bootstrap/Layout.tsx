import { Container, Row, Col, Media } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const BlueContainer = styled(Container)`
  background-color: #cfe8fc;
  margin: 1em 0;

  .row > div {
    border: 1px solid #d6d6d6;
    padding: 0.5em;
  }
`;

const Containers = () => {
  return (
    <ElementCard fullwidth title="Container">
      <div>
        <BlueContainer>Normal container</BlueContainer>
        <BlueContainer fluid>Fluid container</BlueContainer>
      </div>
      <Code>
        {`
          <Container>Normal container</Container>
          <Container fluid>Fluid container</Container>
        `}
      </Code>
    </ElementCard>
  );
};

const Grids = () => {
  return (
    <ElementCard title="Grid">
      <div>
        <BlueContainer>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </BlueContainer>
      </div>
      <Code>
        {`
          <Container>
            <Row>
              <Col sm={8}>sm=8</Col>
              <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
              <Col sm>sm=true</Col>
              <Col sm>sm=true</Col>
              <Col sm>sm=true</Col>
            </Row>
          </Container>
        `}
      </Code>
    </ElementCard>
  );
};

const Other = () => {
  return (
    <ElementCard title="Other">
      <div>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src="http://via.placeholder.com/64x64"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Media</h5>
            <p>Show content beside an image.</p>
          </Media.Body>
        </Media>
      </div>
      <Code>
        {`
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src="http://via.placeholder.com/64x64"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Media Heading</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
        `}
      </Code>
    </ElementCard>
  );
};

export const Layout = () => {
  return (
    <FlexWrapper>
      <Containers />
      <Grids />
      <Other />
    </FlexWrapper>
  );
};
