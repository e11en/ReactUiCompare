import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Dialogs = () => {
  const [open, setOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const onClick = (fullscreen: boolean) => {
    setOpen(true);
    setFullScreen(fullscreen);
  };

  return (
    <ElementCard title="Dialog">
      <SpacedChildren>
        <Button
          color="primary"
          variant="contained"
          onClick={() => onClick(false)}
        >
          Open dialog
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => onClick(true)}
        >
          Open fullscreen dialog
        </Button>
        <Dialog
          fullScreen={fullScreen}
          onClose={() => setOpen(false)}
          open={open}
        >
          <DialogTitle>Some dialog</DialogTitle>
          <DialogContent>Some text</DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </SpacedChildren>
      <Code>
        {`
          const [open, setOpen] = useState(false);
          const [fullScreen, setFullScreen] = useState(false);

          <Button onClick={() => onClick(false)}>Open dialog</Button>
          <Button onClick={() => onClick(true)}>Open fullscreen dialog</Button>

          <Dialog
            fullScreen={fullScreen}
            onClose={() => setOpen(false)}
            open={open}
            >
            <DialogTitle>Some dialog</DialogTitle>
            <DialogContent>Some text</DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Ok</Button>
            </DialogActions>
          </Dialog>
        `}
      </Code>
    </ElementCard>
  );
};

const Alerts = () => {
  const [open, setOpen] = useState(false);

  return (
    <ElementCard title="Alert">
      <SpacedChildren>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Open alert
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => setOpen(false)}
          message="Some alert"
          action={
            <IconButton color="inherit" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </SpacedChildren>
      <Code>
        {`
          const [open, setOpen] = useState(false);
          <Button onClick={() => setOpen(true)}>Open alert</Button>

          <Snackbar
            open={open}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={() => setOpen(false)}
            message="Some alert"
            action={<IconButton onClick={() => setOpen(false)}><CloseIcon /></IconButton>}
          />
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
    </FlexWrapper>
  );
};
