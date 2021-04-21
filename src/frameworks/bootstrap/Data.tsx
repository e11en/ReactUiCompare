import { Badge, Carousel, ListGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import { tableData } from "helpers/data";

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

const Lists = () => {
  return (
    <ElementCard title="List">
      <div>
        <ListGroup>
          <ListGroup.Item active>Active</ListGroup.Item>
          <ListGroup.Item disabled>Disabled</ListGroup.Item>
          <ListGroup.Item action>Action</ListGroup.Item>
        </ListGroup>

        <ListGroup variant="flush">
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
        </ListGroup>
      </div>
      <Code>
        {`
          <ListGroup>
            <ListGroup.Item active>Active</ListGroup.Item>
            <ListGroup.Item disabled>Disabled</ListGroup.Item>
            <ListGroup.Item action>Action</ListGroup.Item>
          </ListGroup>

          <ListGroup variant="flush">
            <ListGroup.Item>Item 1</ListGroup.Item>
            <ListGroup.Item>Item 2</ListGroup.Item>
            <ListGroup.Item>Item 3</ListGroup.Item>
          </ListGroup>

          <ListGroup horizontal>
            <ListGroup.Item>Item 1</ListGroup.Item>
            <ListGroup.Item>Item 2</ListGroup.Item>
            <ListGroup.Item>Item 3</ListGroup.Item>
          </ListGroup>
        `}
      </Code>
    </ElementCard>
  );
};

const Tables = () => {
  return (
    <ElementCard title="Table">
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.city}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Code>
        {`
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((d) => (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.city}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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
      <Lists />
      <Tables />
      <Carousels />
    </FlexWrapper>
  );
};
