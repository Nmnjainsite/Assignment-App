import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/auth-context";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Dialogs({ setData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [editPostItem, setEditPostItem] = React.useState({
    title: "",
    body: "",
  });

  const editPost = async () => {
    if (user !== null) {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PUT",
          body: JSON.stringify({
            id: 1,
            title: editPostItem.title,
            body: editPostItem.body,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) =>
            setData((data) =>
              data.map((el) =>
                el.id === 1
                  ? {
                      ...el,
                      title: [data.title, json.title],
                      body: [data.body, json.body],
                    }
                  : el
              )
            )
          );
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/signin");
    }
  };

  return (
    <div>
      <span onClick={handleOpen}>Edit</span>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <p>
                {" "}
                <TextField
                  autoComplete="Title"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                  onChange={(e) =>
                    setEditPostItem((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />{" "}
              </p>
              <p>
                {" "}
                <TextField
                  autoComplete="Put Content"
                  name="content"
                  required
                  fullWidth
                  id="content"
                  label="Contents"
                  autoFocus
                  onChange={(e) =>
                    setEditPostItem((prev) => ({
                      ...prev,
                      body: e.target.value,
                    }))
                  }
                />{" "}
              </p>
              <span onClick={handleClose}>
                {" "}
                <Button fullWidth variant="contained" onClick={editPost}>
                  Edit Post
                </Button>
              </span>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
