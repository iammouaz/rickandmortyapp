import { makeStyles } from "tss-react/mui";

const useStyles = (image: string) =>
  makeStyles()(() => {
    return {
      boxContainer: {
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "0.5rem",
        width: '200px',
        height: '250px'
      },
      cardItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center'

      },
    };
  });

export default useStyles;
