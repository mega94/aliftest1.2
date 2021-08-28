import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { statusUpdateAC } from "./../../store/main/todos";
import { useDispatch } from "react-redux";

export default function SimpleMenu({ status, id, editClose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    id !== null && dispatch(statusUpdateAC(id));
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {status ? "выполнено" : "не выполнено"}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
      >
        <MenuItem
          selected={status}
          onClick={() => {
            handleClose(id);
          }}
        >
          выполнено
        </MenuItem>
        <MenuItem
          selected={!status}
          onClick={() => {
            handleClose(id);
          }}
        >
          не выполнено
        </MenuItem>
      </Menu>
    </div>
  );
}
