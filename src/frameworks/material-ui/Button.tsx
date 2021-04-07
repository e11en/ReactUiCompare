import {
  Button as MUIButton,
  ButtonGroup,
  IconButton,
  Fab,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const ButtonWrapper = styled.div`
  & > * {
    margin: 0 1em 1em 0;
  }
`;

const NormalButtons = () => {
  return (
    <ElementCard title="Normal buttons">
      <ButtonWrapper>
        <MUIButton variant="contained">Default</MUIButton>
        <MUIButton variant="contained" color="primary">
          Primary
        </MUIButton>
        <MUIButton variant="contained" color="secondary">
          Secondary
        </MUIButton>
        <MUIButton variant="contained" disabled>
          Disabled
        </MUIButton>
      </ButtonWrapper>
      <Code>
        {`
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" disabled>Disabled</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonVariations = () => {
  return (
    <ElementCard title="Other button variations">
      <ButtonWrapper>
        <MUIButton>Link</MUIButton>
        <MUIButton variant="outlined">Outlined</MUIButton>
        <MUIButton variant="contained" startIcon={<DeleteIcon />}>
          Icon button
        </MUIButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </ButtonWrapper>
      <Code>
        {`
          <Button href="#some-url">Link</Button>
          <Button variant="outlined">Outlined</Button>
          <Button startIcon={<DeleteIcon />}>Button with icon</Button>
          <IconButton><DeleteIcon /></IconButton>
          <Fab color="primary"><AddIcon /></Fab>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonSizes = () => {
  return (
    <ElementCard title="Button sizes">
      <ButtonWrapper>
        <MUIButton variant="contained" color="primary" size="small">
          Small
        </MUIButton>
        <MUIButton variant="contained" color="primary" size="medium">
          Medium
        </MUIButton>
        <MUIButton variant="contained" color="primary" size="large">
          Large
        </MUIButton>
      </ButtonWrapper>
      <Code>
        {`
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonGroups = () => {
  return (
    <ElementCard title="Button groups">
      <ButtonWrapper>
        <ButtonGroup color="primary">
          <MUIButton>One</MUIButton>
          <MUIButton>Two</MUIButton>
          <MUIButton>Three</MUIButton>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="primary">
          <MUIButton>One</MUIButton>
          <MUIButton>Two</MUIButton>
          <MUIButton>Three</MUIButton>
        </ButtonGroup>
        <ButtonGroup variant="text" color="primary">
          <MUIButton>One</MUIButton>
          <MUIButton>Two</MUIButton>
          <MUIButton>Three</MUIButton>
        </ButtonGroup>
      </ButtonWrapper>
      <Code>
        {`
          <ButtonGroup variant?="contained | text">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
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
