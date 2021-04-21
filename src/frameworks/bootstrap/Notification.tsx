import { useState } from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Alert,
  Modal,
  Toast,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Dialogs = () => {
  const [open, setOpen] = useState(false);

  return (
    <ElementCard title="Dialog">
      <div>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open dialog
        </Button>

        <Modal show={open} onHide={() => setOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Some heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Some content</Modal.Body>
          <Modal.Footer>Some footer</Modal.Footer>
        </Modal>
      </div>
      <Code>
        {`
          const [open, setOpen] = useState(false);

          <Button variant="primary" onClick={() => setOpen(true)}>Open dialog</Button>

          <Modal show={open} onHide={() => setOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Some heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Some content</Modal.Body>
            <Modal.Footer>Some footer</Modal.Footer>
          </Modal>
        `}
      </Code>
    </ElementCard>
  );
};

const Alerts = () => {
  return (
    <ElementCard title="Alert">
      <div>
        <Alert variant="primary">Some primary alert</Alert>
        <Alert variant="secondary">Some secondary alert</Alert>
        <Alert variant="success">Some success alert</Alert>
        <Alert variant="danger">Some danger alert</Alert>
        <Alert variant="warning">Some warning alert</Alert>
        <Alert variant="info">Some info alert</Alert>
        <Alert variant="light">Some light alert</Alert>
        <Alert variant="dark">Some dark alert</Alert>
        <Alert variant="primary" dismissible>
          Some closable alert
        </Alert>
      </div>
      <Code>
        {`
          <Alert variant="primary">Some primary alert</Alert>
          <Alert variant="secondary">Some secondary alert</Alert>
          <Alert variant="success">Some success alert</Alert>
          <Alert variant="danger">Some danger alert</Alert>
          <Alert variant="warning">Some warning alert</Alert>
          <Alert variant="info">Some info alert</Alert>
          <Alert variant="light">Some light alert</Alert>
          <Alert variant="dark">Some dark alert</Alert>
          <Alert variant="primary" dismissible>Some closable alert</Alert>
        `}
      </Code>
    </ElementCard>
  );
};

const Popovers = () => {
  return (
    <ElementCard title="Popover">
      <div>
        <OverlayTrigger
          trigger="click"
          overlay={
            <Popover id="some-required-id">
              <Popover.Title as="h3">Some popover</Popover.Title>
              <Popover.Content>Some content</Popover.Content>
            </Popover>
          }
        >
          <Button variant="secondary">Show popover</Button>
        </OverlayTrigger>
      </div>
      <Code>
        {`
          <OverlayTrigger
            trigger="click"
            overlay={
              <Popover id="some-required-id">
                <Popover.Title as="h3">Some popover</Popover.Title>
                <Popover.Content>Some content</Popover.Content>
              </Popover>
            }
            >
            <Button variant="secondary">Show popover</Button>
          </OverlayTrigger>
        `}
      </Code>
    </ElementCard>
  );
};

const Toasts = () => {
  return (
    <ElementCard title="Toast">
      <div>
        <Toast>
          <Toast.Header>
            <img
              src="http://via.placeholder.com/20x20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Title</strong>
            <small>subtitle</small>
          </Toast.Header>
          <Toast.Body>Some content</Toast.Body>
        </Toast>
      </div>
      <Code>
        {`
          <Toast>
            <Toast.Header>
              <img
                src="http://via.placeholder.com/20x20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Title</strong>
              <small>subtitle</small>
            </Toast.Header>
            <Toast.Body>Some content</Toast.Body>
          </Toast>
        `}
      </Code>
    </ElementCard>
  );
};

export const Notification = () => {
  return (
    <FlexWrapper>
      <Dialogs />
      <Alerts />
      <Popovers />
      <Toasts />
    </FlexWrapper>
  );
};
