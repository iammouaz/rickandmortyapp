import { makeStyles } from "tss-react/mui";

const useStyles = () =>
  makeStyles()(() => {
    return {
      skeletonBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      },
    };
  });

export default useStyles;
