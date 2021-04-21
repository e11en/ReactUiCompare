import {
  ChakraProvider,
  Button as CButton,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon, AddIcon } from "@chakra-ui/icons";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const NormalButtons = () => {
  return (
    <ElementCard title="Normal buttons">
      <SpacedChildren>
        <CButton>Default</CButton>
        <CButton colorScheme="blue">Colored button</CButton>
        <CButton colorScheme="blue" disabled>
          Colored button
        </CButton>
      </SpacedChildren>
      <Code>
        {`
          <Button>Default</Button>
          <Button colorScheme="blue">Colored button</Button>
          <Button colorScheme="blue" disabled>Colored button</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonVariations = () => {
  return (
    <ElementCard title="Other button variations">
      <SpacedChildren>
        <CButton colorScheme="blue" variant="solid">
          Solid
        </CButton>
        <CButton colorScheme="blue" variant="outline">
          Outline
        </CButton>
        <CButton colorScheme="blue" variant="ghost">
          Ghost
        </CButton>
        <CButton colorScheme="blue" variant="link">
          Link
        </CButton>
        <CButton leftIcon={<EmailIcon />} colorScheme="blue">
          Left icon button
        </CButton>
        <CButton rightIcon={<EmailIcon />} colorScheme="blue">
          Right icon button
        </CButton>
        <IconButton
          aria-label="Icon button"
          colorScheme="blue"
          icon={<EmailIcon />}
        />
      </SpacedChildren>
      <Code>
        {`
          <Button colorScheme="blue" variant="solid">Solid</Button>
          <Button colorScheme="blue" variant="outline">Outline</Button>
          <Button colorScheme="blue" variant="ghost">Ghost</Button>
          <Button colorScheme="blue" variant="link">Link</Button>
          <Button colorScheme="blue" leftIcon={<EmailIcon />}>
            Left icon button
          </Button>
          <Button colorScheme="blue" rightIcon={<EmailIcon />}>
            Right icon button
          </Button>
          <IconButton
            aria-label="Icon button"
            colorScheme="blue"
            icon={<EmailIcon />}
          />
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonSizes = () => {
  return (
    <ElementCard title="Button sizes">
      <SpacedChildren>
        <CButton colorScheme="blue" size="xs">
          XS
        </CButton>
        <CButton colorScheme="blue" size="sm">
          SM
        </CButton>
        <CButton colorScheme="blue" size="md">
          MD
        </CButton>
        <CButton colorScheme="blue" size="lg">
          LG
        </CButton>
      </SpacedChildren>
      <Code>
        {`
          <Button colorScheme="blue" size="xs">XS</Button>
          <Button colorScheme="blue" size="sm">SM</Button>
          <Button colorScheme="blue" size="md">MD</Button>
          <Button colorScheme="blue" size="lg">LG</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const ButtonGroups = () => {
  return (
    <ElementCard title="Button groups">
      <div>
        <ButtonGroup size="sm" isAttached variant="outline">
          <CButton mr="-px">Item 1</CButton>
          <IconButton aria-label="Item 2" icon={<AddIcon />} />
        </ButtonGroup>
      </div>
      <Code>
        {`
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button mr="-px">Item 1</Button>
            <IconButton aria-label="Item 2" icon={<AddIcon />} />
          </ButtonGroup>
        `}
      </Code>
    </ElementCard>
  );
};

export const Button = () => {
  return (
    <ChakraProvider>
      <FlexWrapper>
        <NormalButtons />
        <ButtonVariations />
        <ButtonSizes />
        <ButtonGroups />
      </FlexWrapper>
    </ChakraProvider>
  );
};
