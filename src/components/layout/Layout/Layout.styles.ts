import { makeStyles } from "tss-react/mui";

const useStyles = (image: string) =>
  makeStyles()(() => {
    return {
      appContainer: {
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: '100vh'
      },
    };
  });

export default useStyles;
