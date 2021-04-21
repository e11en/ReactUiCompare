import {
  ChakraProvider,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Input as CInput,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  VStack,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  PinInput,
  PinInputField,
  Textarea,
  Radio,
  RadioGroup,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Fields = () => {
  return (
    <ElementCard title="Fields">
      <VStack>
        <CInput placeholder="Basic input" />
        <CInput placeholder="Invalid input" isInvalid />
        <CInput placeholder="Extra small input" size="xs" />
        <CInput placeholder="Small input" size="sm" />
        <CInput placeholder="Medium input" size="md" />
        <CInput placeholder="Large input" size="lg" />

        <CInput placeholder="Filled" variant="filled" />
        <CInput placeholder="Flushed" variant="flushed" />
        <CInput placeholder="Unstyled" variant="unstyled" />

        <InputGroup>
          <InputLeftAddon children="http://" />
          <CInput placeholder="Adornments" />
          <InputRightAddon children=".com" />
        </InputGroup>

        <NumberInput step={5} defaultValue={15} min={10} max={30}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <Textarea placeholder="Textarea" />
      </VStack>
      <Code>
        {`
          <Input placeholder="Basic input" />
          <Input placeholder="Invalid input" isInvalid />
          <Input placeholder="Extra small input" size="xs" />
          <Input placeholder="Small input" size="sm" />
          <Input placeholder="Medium input" size="md" />
          <Input placeholder="Large input" size="lg" />

          <Input placeholder="Filled" variant="filled" />
          <Input placeholder="Flushed" variant="flushed" />
          <Input placeholder="Unstyled" variant="unstyled" />

          <InputGroup>
            <InputLeftAddon children="http://" />
            <Input placeholder="Adornments" />
            <InputRightAddon children=".com" />
          </InputGroup>

          <NumberInput step={5} defaultValue={15} min={10} max={30}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <HStack>
            <PinInput>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>

          <Textarea placeholder="Textarea" />
        `}
      </Code>
    </ElementCard>
  );
};

const CheckBoxes = () => {
  return (
    <ElementCard title="CheckBoxes">
      <SpacedChildren>
        <Checkbox defaultIsChecked>Selected</Checkbox>
        <Checkbox isDisabled>Disabled</Checkbox>
        <Checkbox>Active</Checkbox>
        <Checkbox isInvalid>Invalid</Checkbox>
        <Checkbox isIndeterminate>Indeterminate</Checkbox>
        <Checkbox colorScheme="red" defaultIsChecked>
          Colored
        </Checkbox>
        <SpacedChildren>
          <Checkbox size="sm">Small</Checkbox>
          <Checkbox size="md">Normal</Checkbox>
          <Checkbox size="lg">Large</Checkbox>
        </SpacedChildren>
      </SpacedChildren>
      <Code>
        {`
          <Checkbox defaultIsChecked>Selected</Checkbox>
          <Checkbox isDisabled>Disabled</Checkbox>
          <Checkbox>Active</Checkbox>
          <Checkbox isInvalid>Invalid</Checkbox>
          <Checkbox isIndeterminate>Indeterminate</Checkbox>
          <Checkbox colorScheme="red" defaultIsChecked>Colored</Checkbox>

          <Checkbox size="sm">Small</Checkbox>
          <Checkbox size="md">Normal</Checkbox>
          <Checkbox size="lg">Large</Checkbox>
        `}
      </Code>
    </ElementCard>
  );
};

const Radios = () => {
  return (
    <ElementCard title="Radios">
      <div>
        <RadioGroup defaultValue="1">
          <Radio value="1">Item 1</Radio>
          <Radio value="2" isDisabled>
            Item 2
          </Radio>
          <Radio value="3" colorScheme="green">
            Item 3
          </Radio>
          <Radio value="4" isInvalid>
            Item 4
          </Radio>
        </RadioGroup>
      </div>
      <Code>
        {`
          <RadioGroup defaultValue="1">
            <Radio value="1">Item 1</Radio>
            <Radio value="2" isDisabled>Item 2</Radio>
            <Radio value="3" colorScheme="green">Item 3</Radio>
            <Radio value="4" isInvalid>Item 4</Radio>
          </RadioGroup>
        `}
      </Code>
    </ElementCard>
  );
};

const Selects = () => {
  return (
    <ElementCard title="Select">
      <div>
        <Select placeholder="Outlined">
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
        </Select>
        <Select placeholder="Filled" variant="filled" />
        <Select placeholder="Flushed" variant="flushed" />
        <Select placeholder="Unstyled" variant="unstyled" />
      </div>
      <Code>
        {`
          <Select placeholder="Outlined">
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
          </Select>
          <Select placeholder="Filled" variant="filled" />
          <Select placeholder="Flushed" variant="flushed" />
          <Select placeholder="Unstyled" variant="unstyled" />
        `}
      </Code>
    </ElementCard>
  );
};

const Sliders = () => {
  return (
    <ElementCard title="Sliders">
      <div>
        <Slider aria-label="slider" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
      <Code>
        {`
          <Slider aria-label="slider" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        `}
      </Code>
    </ElementCard>
  );
};

const Switches = () => {
  return (
    <ElementCard title="Switches">
      <SpacedChildren>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Selected</FormLabel>
          <Switch isChecked />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Disabled</FormLabel>
          <Switch isDisabled />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Colored</FormLabel>
          <Switch colorScheme="red" defaultChecked={true} />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Small</FormLabel>
          <Switch size="sm" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Medium</FormLabel>
          <Switch size="md" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel mb="0">Large</FormLabel>
          <Switch size="lg" />
        </FormControl>
      </SpacedChildren>
      <Code>
        {`
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Selected</FormLabel>
              <Switch isChecked />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Disabled</FormLabel>
              <Switch isDisabled />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Colored</FormLabel>
              <Switch colorScheme="red" defaultChecked={true} />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Small</FormLabel>
              <Switch size="sm" />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Medium</FormLabel>
              <Switch size="md" />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Large</FormLabel>
              <Switch size="lg" />
            </FormControl>
        `}
      </Code>
    </ElementCard>
  );
};

const Other = () => {
  return (
    <ElementCard title="Other">
      <div>
        <Editable defaultValue="Some inline editable input">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </div>
      <Code>
        {`
          <Editable defaultValue="Some inline editable input">
            <EditablePreview />
            <EditableInput />
          </Editable>
        `}
      </Code>
    </ElementCard>
  );
};

export const Input = () => {
  return (
    <ChakraProvider>
      <FlexWrapper>
        <Fields />
        <CheckBoxes />
        <Radios />
        <Selects />
        <Sliders />
        <Switches />
        <Other />
      </FlexWrapper>
    </ChakraProvider>
  );
};
