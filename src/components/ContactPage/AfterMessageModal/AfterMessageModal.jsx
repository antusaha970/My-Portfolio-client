import { Box } from "@mui/material";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const AfterMessageModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Box>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Resume Modal"
      >
        Open
      </Modal>
    </Box>
  );
};

export default AfterMessageModal;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#525659",
    width: "80%",
    height: "100%",
  },
};
