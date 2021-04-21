import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Fields = () => {
  return (
    <ElementCard title="Fields">
      <div>
        <Form.Control placeholder="Standard" />
        <Form.Control disabled placeholder="Disabled" />
        <Form.Control as="textarea" rows={3} placeholder="Textarea" />
      </div>
      <div>
        <Form.Control size="sm" placeholder="Small" />
        <Form.Control placeholder="Medium" />
        <Form.Control placeholder="Large" size="lg" />
      </div>
      <Code>
        {`
          <Form.Control placeholder="Standard" />
          <Form.Control disabled placeholder="Disabled" />
          <Form.Control as="textarea" rows={3} placeholder="Textarea" />

          <Form.Control size="sm" placeholder="Small" />
          <Form.Control placeholder="Medium" />
          <Form.Control placeholder="Large" size="lg" />
        `}
      </Code>
    </ElementCard>
  );
};

const CheckBoxes = () => {
  return (
    <ElementCard title="Checkboxes">
      <div>
        <Form.Check checked type="checkbox" label="Selected" readOnly />
        <Form.Check disabled type="checkbox" label="Disabled" />
        <Form.Check type="checkbox" label="Active" />
      </div>
      <Code>
        {`
          <Form.Check checked type="checkbox" label="Selected" readOnly />
          <Form.Check disabled type="checkbox" label="Disabled" />
          <Form.Check type="checkbox" label="Active" />
        `}
      </Code>
    </ElementCard>
  );
};

const Radios = () => {
  return (
    <ElementCard title="Radios">
      <div>
        <Form.Check checked type="radio" label="Selected" readOnly />
        <Form.Check disabled type="radio" label="Disabled" />
        <Form.Check type="radio" label="Active" />
      </div>
      <Code>
        {`
          <Form.Check checked type="radio" label="Selected" readOnly />
          <Form.Check disabled type="radio" label="Disabled" />
          <Form.Check type="radio" label="Active" />
        `}
      </Code>
    </ElementCard>
  );
};

const Selects = () => {
  return (
    <ElementCard title="Select">
      <div>
        <Form.Group>
          <Form.Label>Please select</Form.Label>
          <Form.Control as="select">
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </Form.Control>
        </Form.Group>
      </div>
      <Code>
        {`
        <Form.Group>
          <Form.Label>Please select</Form.Label>
          <Form.Control as="select">
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </Form.Control>
        </Form.Group>
        `}
      </Code>
    </ElementCard>
  );
};

const Sliders = () => {
  return (
    <ElementCard title="Sliders">
      <div>
        <Form.Control type="range" custom />
      </div>
      <Code>
        {`
          <Form.Control type="range" custom />
        `}
      </Code>
    </ElementCard>
  );
};

const Switches = () => {
  return (
    <ElementCard title="Switches">
      <div>
        <Form.Check type="switch" label="Checked" checked />
        <Form.Check type="switch" label="Disabled" disabled />
        <Form.Check type="switch" label="Active" />
      </div>
      <Code>
        {`
          <Form.Check type="switch" label="Checked" checked />
          <Form.Check type="switch" label="Disabled" disabled />
          <Form.Check type="switch" label="Active" />
        `}
      </Code>
    </ElementCard>
  );
};

const Other = () => {
  return (
    <ElementCard title="Other">
      <div>
        <Form.File label="Add file" custom />
      </div>
      <Code>
        {`
          <Form.File label="Add file" custom />
        `}
      </Code>
    </ElementCard>
  );
};

export const Input = () => {
  return (
    <FlexWrapper>
      <Fields />
      <CheckBoxes />
      <Radios />
      <Selects />
      <Sliders />
      <Switches />
      <Other />
    </FlexWrapper>
  );
};
