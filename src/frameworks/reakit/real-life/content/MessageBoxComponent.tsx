import { Dialog } from "reakit/Dialog";
import styled from "@emotion/styled";

const MessageBox = styled(Dialog)<any>`
  background-color: ${(props) => props.color};
  position: fixed;
  top: 190px;
  left: 50%;
  padding: 1em;
  border: 1px solid #cacaca;
`;

const MessageBoxComponent = ({ dialog, color, message, label }: any) => {
  return (
    <MessageBox {...dialog} aria-label={label} color={color}>
      {message}
    </MessageBox>
  );
};

export default MessageBoxComponent;
