import { Box, Button, Stack } from "@mui/material";
import { useContext } from "react";
import Modal from "react-modal";
import { ResumeModalContext } from "../../Contexts/AllContexts";
const ViewResumeModal = () => {
  const [modalIsOpen, setIsOpen] = useContext(ResumeModalContext);

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
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
  const link = "http://localhost:5000/view_resume";
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
        <Stack direction="row" p={1} justifyContent="space-between">
          <Button onClick={closeModal} color="secondary" variant="contained">
            Close
          </Button>
          {/* <Button onClick={closeModal} color="secondary" variant="contained">
            Download
          </Button> */}
        </Stack>
        <iframe
          src={`${link}#view=fitH`}
          title="testPdf"
          height="100%"
          width="100%"
        />
      </Modal>
    </Box>
  );
};

export default ViewResumeModal;
