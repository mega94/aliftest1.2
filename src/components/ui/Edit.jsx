import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import CheckIcon from "@material-ui/icons/Check";
import { titleEditAC } from "./../../store/main/todos";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      width: "100%"
    },
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function Inputs({ text, editClose, id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const myRef = useRef();
  const [value, setValue] = useState(text);
  const save = () => {
    dispatch(titleEditAC({ id: id, text: value }));
    editClose(null);
  };
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      editClose(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <form ref={myRef} className={classes.root} noValidate autoComplete="off">
      <Input
        endAdornment={<CheckIcon onClick={save} />}
        defaultValue={text}
        onChange={(e) => setValue(e.target.value)}
        inputProps={{ "aria-label": "description" }}
      />
    </form>
  );
}
