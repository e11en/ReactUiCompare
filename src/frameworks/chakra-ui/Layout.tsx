import {
  ChakraProvider,
  Grid,
  GridItem,
  Container,
  Box,
  Center,
  SimpleGrid,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const ColorContainer = styled(Container)`
  background-color: #cfe8fc;
`;

const Containers = () => {
  return (
    <ElementCard fullwidth title="Container">
      <div>
        <VStack>
          <ColorContainer maxW="container.xl">XL</ColorContainer>
          <ColorContainer maxW="container.lg">L</ColorContainer>
          <ColorContainer maxW="container.md">M</ColorContainer>
          <ColorContainer maxW="container.sm" centerContent>
            S
          </ColorContainer>
        </VStack>
      </div>
      <Code>
        {`
          <Container maxW="container.xl">XL</Container>
          <Container maxW="container.lg">L</Container>
          <Container maxW="container.md">M</Container>
          <Container maxW="container.sm" centerContent>S</Container>
        `}
      </Code>
    </ElementCard>
  );
};

const Grids = () => {
  return (
    <ElementCard title="Grid">
      <SpacedChildren>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="#d3e2ef" />
          <GridItem colSpan={2} bg="#d3e2ef" />
          <GridItem colSpan={2} bg="#d3e2ef" />
          <GridItem colSpan={4} bg="#d3e2ef" />
        </Grid>

        <SimpleGrid columns={2} spacing={1}>
          <Box bg="#cfe8fc" height="80px" />
          <Box bg="#cfe8fc" height="80px" />
          <Box bg="#cfe8fc" height="80px" />
          <Box bg="#cfe8fc" height="80px" />
          <Box bg="#cfe8fc" height="80px" />
        </SimpleGrid>
      </SpacedChildren>
      <Code>
        {`
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg="#d3e2ef" />
            <GridItem colSpan={2} bg="#d3e2ef" />
            <GridItem colSpan={2} bg="#d3e2ef" />
            <GridItem colSpan={4} bg="#d3e2ef" />
          </Grid>

          <SimpleGrid columns={2} spacing={1} m={2}>
            <Box bg="#cfe8fc" height="80px" />
            <Box bg="#cfe8fc" height="80px" />
            <Box bg="#cfe8fc" height="80px" />
            <Box bg="#cfe8fc" height="80px" />
            <Box bg="#cfe8fc" height="80px" />
          </SimpleGrid>
        `}
      </Code>
    </ElementCard>
  );
};

const Other = () => {
  return (
    <ElementCard title="Other">
      <SpacedChildren>
        <Center bg="#d3e2ef" h="100px">
          Center
        </Center>
        <AspectRatio maxW="100px" ratio={1}>
          <Box bg="#cfe8fc">Aspect ratio</Box>
        </AspectRatio>
      </SpacedChildren>
      <Code>
        {`
          <Center bg="#d3e2ef" h="100px">Center</Center>

          <AspectRatio maxW="100px" ratio={1}>
            <Box bg="#cfe8fc">Aspect ratio</Box>
          </AspectRatio>
        `}
      </Code>
    </ElementCard>
  );
};

export const Layout = () => {
  return (
    <ChakraProvider>
      <FlexWrapper>
        <Containers />
        <Grids />
        <Other />
      </FlexWrapper>
    </ChakraProvider>
  );
};
