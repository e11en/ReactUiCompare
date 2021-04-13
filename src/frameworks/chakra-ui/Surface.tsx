import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Boxes = () => {
  return (
    <ElementCard title="Box">
      <SpacedChildren>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          A box
        </Box>
      </SpacedChildren>
      <Code>
        {`
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">A box</Box>
        `}
      </Code>
    </ElementCard>
  );
};

const Accordions = () => {
  return (
    <ElementCard title="Accordion">
      <div>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex={1} textAlign="left">
                Accordion 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>Some text</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex={1} textAlign="left">
                Accordion 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>Some text</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <Code>
        {`
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex={1} textAlign="left">
                  Accordion 1
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>Some text</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex={1} textAlign="left">
                  Accordion 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>Some text</AccordionPanel>
            </AccordionItem>
          </Accordion>
        `}
      </Code>
    </ElementCard>
  );
};

export const Surface = () => {
  return (
    <FlexWrapper>
      <Boxes />
      <Accordions />
    </FlexWrapper>
  );
};
