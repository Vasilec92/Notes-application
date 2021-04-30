import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

import useStyles from "./style";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    title: "",
    note: "",
    importance: "",
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const createPost = async (post) => {
    try {
      const { title, note, importance } = postData;
      fetch("http://localhost:5000/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          note,
          importance,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const results = await post.json();
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    createPost();
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.addBtn}
        variant="outlined"
        color="primary"
        onClick={handleToggle}
      >
        New note
      </Button>
      <Backdrop className={classes.backdrop} open={open}>
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <div className={classes.header}>
              <div className={classes.close} onClick={handleClose}>
                X
              </div>
              <Typography className={classes.title} variant="h6">
                New note
              </Typography>
            </div>
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <TextField
              name="note"
              variant="outlined"
              label="Note"
              fullWidth
              value={postData.note}
              onChange={(e) =>
                setPostData({ ...postData, note: e.target.value })
              }
            />

            <TextField
              name="importance"
              variant="outlined"
              label="Importance"
              fullWidth
              value={postData.importance}
              onChange={(e) =>
                setPostData({ ...postData, importance: e.target.value })
              }
            />

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Backdrop>
    </div>
  );
};

export default Form;
