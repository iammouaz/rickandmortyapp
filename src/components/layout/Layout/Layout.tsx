import { Box } from "@mui/system";
import { ReactElement } from "react";
import Image from "assets/cover.png";
import Header from "components/layout/Header/Header";
import useStyles from "./Layout.styles";

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const styles = useStyles(Image)();

  return (
    <Box py="2rem" px="2.5rem" className={styles.classes.appContainer}>
      <Header />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default Layout;
