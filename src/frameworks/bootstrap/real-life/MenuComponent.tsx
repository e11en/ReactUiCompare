import { Modal } from "react-bootstrap";

const MenuComponent = ({ open, onClose }: any) => {
  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>React Bootstrap doesn't have a drawer.</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

export default MenuComponent;
