import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          color: "white",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: "sticky",
          backgroundColor: "#000",
        },
      },
    },
  },
});
