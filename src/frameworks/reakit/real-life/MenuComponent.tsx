import { useEffect } from "react";
import { useDialogState } from "reakit/Dialog";

import MessageBox from "./content/MessageBoxComponent";

const MenuComponent = ({ open, onClose }: any) => {
  const dialog = useDialogState();

  useEffect(() => {
    if (open) dialog.show();
  }, [open]);

  useEffect(() => {
    if (dialog.visible) onClose();
  }, [dialog.visible]);

  return (
    <MessageBox
      dialog={dialog}
      color="#ffaeae"
      label="No menu"
      message="Reakit doesn't have a drawer kind of menu."
    />
  );
};

export default MenuComponent;
