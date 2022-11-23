import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditPost from "./EditPost";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/auth-context";

const ITEM_HEIGHT = 48;

export default function EditMenu({ setData }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user } = UserAuth();
  const navigate = useNavigate();
  const deletePost = async () => {
    if (user != null) {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((json) =>
            setData((data) => data.filter((data) => data.id !== 1))
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
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem>
          <EditPost setData={setData} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span onClick={() => deletePost()}>Delete</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
