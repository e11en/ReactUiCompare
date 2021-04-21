import { useRef } from "react";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const MarginedChildren = styled.div`
  & > * {
    margin: 1em 0;
  }
`;

const Dialogs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ElementCard title="Dialog">
      <div>
        <Button onClick={onOpen}>Open dialog</Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
          size="xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Some dialog</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Some text</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <Code>
        {`
          const { isOpen, onOpen, onClose } = useDisclosure();

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset="slideInBottom"
            size="xl"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Some dialog</ModalHeader>
              <ModalCloseButton />
              <ModalBody>Some text</ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        `}
      </Code>
    </ElementCard>
  );
};

const AlertDialogs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();

  return (
    <ElementCard title="Alert dialog">
      <div>
        <Button colorScheme="red" onClick={onOpen}>
          Open alert
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Some alert
              </AlertDialogHeader>

              <AlertDialogBody>Are you sure?</AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
      <Code>
        {`
          const { isOpen, onOpen, onClose } = useDisclosure();
          const cancelRef = useRef<any>();

          <Button colorScheme="red" onClick={onOpen}>
            Open alert
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Some alert
                </AlertDialogHeader>

                <AlertDialogBody>Are you sure?</AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    No
                  </Button>
                  <Button colorScheme="red" onClick={onClose} ml={3}>
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        `}
      </Code>
    </ElementCard>
  );
};

const Alerts = () => {
  return (
    <ElementCard title="Alert">
      <MarginedChildren>
        <Alert>Some alert</Alert>
        <Alert variant="solid">Some solid alert</Alert>
        <Alert variant="left-accent">Some left accent alert</Alert>
        <Alert variant="top-accent">Some top accent alert</Alert>

        <Alert>
          <AlertTitle>Some alert</AlertTitle>
          <AlertDescription>Some alert description</AlertDescription>
        </Alert>

        <Alert>
          <AlertTitle>Some closable alert</AlertTitle>
          <AlertDescription>Some alert description</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>

        <Alert status="error">
          <AlertIcon />
          Some error alert
        </Alert>

        <Alert status="success">
          <AlertIcon />
          Some success alert
        </Alert>

        <Alert status="warning">
          <AlertIcon />
          Some warning alert
        </Alert>

        <Alert status="info">
          <AlertIcon />
          Some info alert
        </Alert>
      </MarginedChildren>
      <Code>
        {`
          <Alert>Some alert</Alert>
          <Alert variant="solid">Some solid alert</Alert>
          <Alert variant="left-accent">Some left accent alert</Alert>
          <Alert variant="top-accent">Some top accent alert</Alert>

          <Alert>
            <AlertTitle>Some alert</AlertTitle>
            <AlertDescription>Some alert description</AlertDescription>
          </Alert>

          <Alert>
            <AlertTitle>Some closable alert</AlertTitle>
            <AlertDescription>Some alert description</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>

          <Alert status="error">
            <AlertIcon />
            Some error alert
          </Alert>

          <Alert status="success">
            <AlertIcon />
            Some success alert
          </Alert>

          <Alert status="warning">
            <AlertIcon />
            Some warning alert
          </Alert>

          <Alert status="info">
            <AlertIcon />
            Some info alert
          </Alert>
        `}
      </Code>
    </ElementCard>
  );
};

const Toasts = () => {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const variants = ["solid", "subtle", "left-accent", "top-accent"];
  const positions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ];

  return (
    <ElementCard title="Toast">
      <SpacedChildren>
        {statuses.map((s: any) => (
          <Button
            onClick={() =>
              toast({
                title: "Some toast",
                description: "Some content",
                status: s,
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Show {s} toast
          </Button>
        ))}

        {variants.map((v: any) => (
          <Button
            onClick={() =>
              toast({
                title: "Some toast",
                description: "Some content",
                duration: 9000,
                isClosable: true,
                variant: v,
              })
            }
          >
            Show {v} toast
          </Button>
        ))}

        {positions.map((p: any) => (
          <Button
            onClick={() =>
              toast({
                title: "Some toast",
                description: "Some content",
                duration: 9000,
                isClosable: true,
                position: p,
              })
            }
          >
            Show {p} toast
          </Button>
        ))}
      </SpacedChildren>
      <Code>
        {`
          const toast = useToast();

          <Button
            onClick={() =>
              toast({
                title: "Some toast",
                description: "Some content",
                status: "success",
                duration: 9000,
                isClosable: true,
                variant: "solid",
                position: "bottom"
              })
            }
          >
            Show toast
          </Button>
        `}
      </Code>
    </ElementCard>
  );
};

const Popovers = () => {
  return (
    <ElementCard title="Popover">
      <div>
        <Popover>
          <PopoverTrigger>
            <Button>Show popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Some header</PopoverHeader>
            <PopoverBody>Some content</PopoverBody>
            <PopoverFooter>Some footer</PopoverFooter>
          </PopoverContent>
        </Popover>
      </div>
      <Code>
        {`
          <Popover>
            <PopoverTrigger>
              <Button>Show popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Some header</PopoverHeader>
              <PopoverBody>Some content</PopoverBody>
              <PopoverFooter>Some footer</PopoverFooter>
            </PopoverContent>
          </Popover>
        `}
      </Code>
    </ElementCard>
  );
};

export const Notification = () => {
  return (
    <ChakraProvider>
      <FlexWrapper>
        <Dialogs />
        <AlertDialogs />
        <Alerts />
        <Toasts />
        <Popovers />
      </FlexWrapper>
    </ChakraProvider>
  );
};
