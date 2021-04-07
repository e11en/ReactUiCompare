import {
  Alert,
  message,
  Button,
  Modal,
  ModalFuncProps,
  notification,
  Popconfirm,
} from "antd";
import "antd/dist/antd.css";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Dialogs = () => {
  const dialogContent: ModalFuncProps = {
    title: "Some dialog",
    content: "Some text",
    onOk() {},
    onCancel() {},
  };
  const openConfirmDialog = () => Modal.confirm(dialogContent);
  const openInfoDialog = () => Modal.info(dialogContent);
  const openSuccessDialog = () => Modal.success(dialogContent);
  const openWarningDialog = () => Modal.warning(dialogContent);
  const openErrorDialog = () => Modal.error(dialogContent);

  return (
    <ElementCard title="Dialog">
      <SpacedChildren>
        <Button onClick={openConfirmDialog}>Open confirm dialog</Button>
        <Button onClick={openInfoDialog}>Open info dialog</Button>
        <Button onClick={openSuccessDialog}>Open success dialog</Button>
        <Button onClick={openWarningDialog}>Open warning dialog</Button>
        <Button onClick={openErrorDialog}>Open error dialog</Button>
      </SpacedChildren>
      <Code>
        {`
          const dialogContent: ModalFuncProps = {
            title: "Some dialog",
            content: "Some text",
            onOk() {},
            onCancel() {},
          };
          const openConfirmDialog = () => Modal.confirm(dialogContent);
          const openInfoDialog = () => Modal.info(dialogContent);
          const openSuccessDialog = () => Modal.success(dialogContent);
          const openWarningDialog = () => Modal.warning(dialogContent);
          const openErrorDialog = () => Modal.error(dialogContent);

          <Button onClick={openConfirmDialog}>Open confirm dialog</Button>
          <Button onClick={openInfoDialog}>Open info dialog</Button>
          <Button onClick={openSuccessDialog}>Open success dialog</Button>
          <Button onClick={openWarningDialog}>Open warning dialog</Button>
          <Button onClick={openErrorDialog}>Open error dialog</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const Alerts = () => {
  return (
    <ElementCard title="Alert">
      <SpacedChildren>
        <Alert message="Some success alert" type="success" />
        <Alert message="Some closable info alert" type="info" closable />
        <Alert message="Some warning alert with icon" type="warning" showIcon />
        <Alert
          message="Some error alert"
          type="error"
          description="Some description"
        />
      </SpacedChildren>
      <Code>
        {`
          <Alert message="Some success alert" type="success" />
          <Alert message="Some closable info alert" type="info" closable />
          <Alert message="Some warning alert with icon" type="warning" showIcon />
          <Alert
            message="Some error alert"
            type="error"
            description="Some description"
          />
        `}
      </Code>
    </ElementCard>
  );
};

const Messages = () => {
  const info = () => message.info("Some info message");
  const success = () => message.success("Some success message");
  const warning = () => message.warning("Some warning message");
  const error = () => message.error("Some error message");

  return (
    <ElementCard title="Messages">
      <SpacedChildren>
        <Button onClick={info}>Open info message</Button>
        <Button onClick={success}>Open success message</Button>
        <Button onClick={warning}>Open warning message</Button>
        <Button onClick={error}>Open error message</Button>
      </SpacedChildren>
      <Code>
        {`
          const success = () => message.success("Some success message");
          const warning = () => message.warning("Some warning message");
          const error = () => message.error("Some error message");

          <Button onClick={success}>Open success message</Button>
          <Button onClick={warning}>Open warning message</Button>
          <Button onClick={error}>Open error message</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const NotificationBox = () => {
  const notificationContent = {
    message: "Some notification",
    description: "Some description",
  };

  const info = () => notification.info(notificationContent);
  const success = () => notification.success(notificationContent);
  const warning = () => notification.warning(notificationContent);
  const error = () => notification.error(notificationContent);

  return (
    <ElementCard title="Notifications">
      <SpacedChildren>
        <Button onClick={info}>Open info notification</Button>
        <Button onClick={success}>Open success notification</Button>
        <Button onClick={warning}>Open warning notification</Button>
        <Button onClick={error}>Open error notification</Button>
      </SpacedChildren>
      <Code>
        {`
          const notificationContent = {
            message: "Some notification",
            description: "Some description",
          };

          const info = () => notification.info(notificationContent);
          const success = () => notification.success(notificationContent);
          const warning = () => notification.warning(notificationContent);
          const error = () => notification.error(notificationContent);

          <Button onClick={info}>Open info notification</Button>
          <Button onClick={success}>Open success notification</Button>
          <Button onClick={warning}>Open warning notification</Button>
          <Button onClick={error}>Open error notification</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const Popconfirms = () => {
  return (
    <ElementCard title="Popconfirm">
      <SpacedChildren>
        <Popconfirm title="Some popconfirm">
          <Button>Show popover</Button>
        </Popconfirm>
      </SpacedChildren>
      <Code>
        {`
          <Popconfirm title="Some popconfirm">
            <Button>Show popover</Button>
          </Popconfirm>
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
      <Messages />
      <NotificationBox />
      <Popconfirms />
    </FlexWrapper>
  );
};
