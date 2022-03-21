import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid transparent",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const modal = {
  backgroundColor: "yellow",
  opacity: "0.8",
  border: "2px solid transparent",
  borderRadius: "15px",
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={modal} onClick={handleOpen}>
        <Typography component="h1">
          Click here to learn more about this page
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            About Page
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This page is about I am Lorem ipsum dolor sit amet, consectetur //
            adipisicing elit. Commodi, architecto iusto magnam quidem totam
            eaque // dolorum vel adipisci! Cumque consequuntur debitis tempore
            blanditiis // aliquid perferendis magni nam, nihil explicabo ea!.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// export default function TextAlignment() {
//   return (
//     <Typography component="div">
//       <Box
//         sx={{
//           textAlign: "center",
//           width: "40%",
//           backgroundColor: "#F8F9F9",
//           opacity: "0.7",
//           borderStyle: "solid",
//           borderColor: "transparent",
//           borderRadius: "20px",
//           marginTop: "15%",
//           marginLeft: "30%",
//           color: "black",
//         }}
//       >
//         This page is about I am Lorem ipsum dolor sit amet, consectetur
//         adipisicing elit. Commodi, architecto iusto magnam quidem totam eaque
//         dolorum vel adipisci! Cumque consequuntur debitis tempore blanditiis
//         aliquid perferendis magni nam, nihil explicabo ea!.
//       </Box>
//     </Typography>
//   );
// }
