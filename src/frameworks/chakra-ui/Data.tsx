import {
  ChakraProvider,
  Badge,
  Kbd,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagCloseButton,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Avatars = () => {
  return (
    <ElementCard title="Avatar">
      <SpacedChildren>
        <Avatar />
        <Avatar name="A" />
        <Avatar>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <AvatarGroup size="md" max={2}>
          <Avatar name="A" />
          <Avatar name="B" />
          <Avatar name="C" />
        </AvatarGroup>

        <div>
          <Avatar size="2xs" />
          <Avatar size="xs" />
          <Avatar size="sm" />
          <Avatar size="md" />
          <Avatar size="lg" />
          <Avatar size="xl" />
          <Avatar size="2xl" />
        </div>
      </SpacedChildren>
      <Code>
        {`
          <Avatar />
          <Avatar name="A" />
          <Avatar>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <AvatarGroup size="md" max={2}>
            <Avatar name="A" />
            <Avatar name="B" />
            <Avatar name="C" />
          </AvatarGroup>

          <Avatar size="2xs" />
          <Avatar size="xs" />
          <Avatar size="sm" />
          <Avatar size="md" />
          <Avatar size="lg" />
          <Avatar size="xl" />
          <Avatar size="2xl" />
        `}
      </Code>
    </ElementCard>
  );
};

const Badges = () => {
  return (
    <ElementCard title="Badge">
      <SpacedChildren>
        <Badge>Default</Badge>
        <Badge colorScheme="green">Colored</Badge>
        <Badge variant="outline">Default</Badge>
        <Badge variant="solid">Success</Badge>
        <Badge variant="subtle">Removed</Badge>
      </SpacedChildren>
      <Code>
        {`
          <Badge>Default</Badge>
          <Badge colorScheme="green">Colored</Badge>
          <Badge variant="outline">Default</Badge>
          <Badge variant="solid">Success</Badge>
          <Badge variant="subtle">Removed</Badge>
        `}
      </Code>
    </ElementCard>
  );
};

const Tags = () => {
  return (
    <ElementCard title="Tag">
      <SpacedChildren>
        <Tag>Default</Tag>
        <Tag colorScheme="blue">Colored</Tag>
        <Tag variant="solid">Solid</Tag>
        <Tag variant="outlined">Outlined</Tag>
        <Tag variant="subtle">Subtle</Tag>
        <Tag size="sm">Small</Tag>
        <Tag size="md">Medium</Tag>
        <Tag size="lg">Large</Tag>
        <Tag>
          <TagLeftIcon boxSize="12px" as={AddIcon} key={1} />
          <TagLabel key={2}>With icon</TagLabel>
        </Tag>
        <Tag>
          <TagLabel>With close button</TagLabel>
          <TagCloseButton />
        </Tag>
      </SpacedChildren>
      <Code>
        {`
          <Tag>Default</Tag>
          <Tag colorScheme="blue">Colored</Tag>
          <Tag variant="solid">Solid</Tag>
          <Tag variant="outlined">Outlined</Tag>
          <Tag variant="subtle">Subtle</Tag>
          <Tag size="sm">Small</Tag>
          <Tag size="md">Medium</Tag>
          <Tag size="lg">Large</Tag>
          <Tag>
            <TagLeftIcon boxSize="12px" as={AddIcon} key={1} />
            <TagLabel key={2}>With icon</TagLabel>
          </Tag>
          <Tag>
            <TagLabel>With close button</TagLabel>
            <TagCloseButton />
          </Tag>
        `}
      </Code>
    </ElementCard>
  );
};

const Lists = () => {
  return (
    <ElementCard title="List">
      <div>
        <UnorderedList>
          <ListItem>Unordered list item 1</ListItem>
          <ListItem>Unordered list item 2</ListItem>
        </UnorderedList>
        <OrderedList>
          <ListItem>Ordered list item 1</ListItem>
          <ListItem>Ordered list item 2</ListItem>
        </OrderedList>
        <List>
          <ListItem>
            <ListIcon color="green.500">
              <AddIcon />
            </ListIcon>
            List item with icon
          </ListItem>
        </List>
      </div>
      <Code>
        {`
          <UnorderedList>
            <ListItem>Unordered list item 1</ListItem>
            <ListItem>Unordered list item 2</ListItem>
          </UnorderedList>

          <OrderedList>
            <ListItem>Ordered list item 1</ListItem>
            <ListItem>Ordered list item 2</ListItem>
          </OrderedList>

          <List>
            <ListItem>
              <ListIcon color="green.500">
                <AddIcon />
              </ListIcon>
              List item with icon
            </ListItem>
          </List>
        `}
      </Code>
    </ElementCard>
  );
};

const Tables = () => {
  return (
    <ElementCard title="Table">
      <div>
        <Table variant="simple">
          <TableCaption>Some caption</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>City</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Item 1</Td>
              <Td>Amsterdam</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Item 2</Td>
              <Td>Berlin</Td>
            </Tr>
          </Tbody>
        </Table>

        <Table variant="striped">
          <TableCaption>Some caption</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>City</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Item 1</Td>
              <Td>Amsterdam</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Item 2</Td>
              <Td>Berlin</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
      <Code>
        {`
          <Table variant="simple">
            <TableCaption>Some caption</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>City</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Item 1</Td>
                <Td>Amsterdam</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Item 2</Td>
                <Td>Berlin</Td>
              </Tr>
            </Tbody>
          </Table>

          <Table variant="striped">
            <TableCaption>Some caption</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>City</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Item 1</Td>
                <Td>Amsterdam</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Item 2</Td>
                <Td>Berlin</Td>
              </Tr>
            </Tbody>
          </Table>
        `}
      </Code>
    </ElementCard>
  );
};

const Statistics = () => {
  return (
    <ElementCard title="Statistic">
      <div>
        <Stat>
          <StatLabel>Some statistic</StatLabel>
          <StatNumber>€ 1.128,93</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </div>
      <Code>
        {`
          <Stat>
            <StatLabel>Some statistic</StatLabel>
            <StatNumber>€ 1.128,93</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
          </Stat>
        `}
      </Code>
    </ElementCard>
  );
};

const KeyBoardKey = () => {
  return (
    <ElementCard title="KeyBoardKey">
      <div>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </div>
      <Code>
        {`
          <Kbd>shift</Kbd> + <Kbd>H</Kbd>
        `}
      </Code>
    </ElementCard>
  );
};

export const Data = () => {
  return (
    <ChakraProvider>
      <FlexWrapper>
        <Avatars />
        <Badges />
        <Tags />
        <Lists />
        <Tables />
        <Statistics />
        <KeyBoardKey />
      </FlexWrapper>
    </ChakraProvider>
  );
};
