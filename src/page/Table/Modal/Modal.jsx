import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CreateIcon from "@material-ui/icons/Create";
import Form from "./Form";

function SimpleDialog(props) {
  const { onClose, selectedValue, open, id } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Создать задания</DialogTitle>
      <Form id={id} close={handleClose} />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default function SimpleDialogDemo({ id }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CreateIcon
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      />
      <SimpleDialog open={open} id={id} onClose={handleClose} />
    </div>
  );
}
