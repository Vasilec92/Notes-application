import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  addBtn: {
    display: "flex",
    textAlign: "center",
    margin: "20px auto",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  close: {
    cursor: "pointer",
    alignSelf: "flex-end",
  },
  title: {
    alignSelf: "center",
  },
}));
