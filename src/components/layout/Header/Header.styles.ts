import { makeStyles } from "tss-react/mui";

const useStyles = () =>
  makeStyles()(() => {
    return {
      headerContainer: {
        display: "flex",
        justifyContent: "space-between",
      },
      headerButton: {
        cursor: "pointer",
      },
      headerTitle: {
        textTransform: "uppercase",
        fontWeight: '800',
        fontSize: '1.7rem'
      },
    };
  });

export default useStyles;
