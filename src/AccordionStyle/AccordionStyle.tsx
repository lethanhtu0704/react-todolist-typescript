import { makeStyles } from "@mui/styles";

const accordionStyle = makeStyles({
  fab: {
    bottom: 30,
    right: 30,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 400,
    // margin: `${theme.spacing(0)} auto`
  },
  loginBtn: {
    //marginTop: theme.spacing(2),
    flexGrow: 1,
  },
});

export default accordionStyle;
