import { rem } from "../../utils/functions";

export const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // position: "sticky",
    // top: 85,
    backgroundColor: "white",
    paddingBottom: rem(30),
  },
  container_dark: {
    backgroundColor: "black",
  },
  textfield: {
    width: "90%",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    backgroundColor: "#f7f9fa",
  },
  textfield_dark: {
    backgroundColor: "#121212",
  },
};
