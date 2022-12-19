import { Box, Typography } from "@mui/material";
import useStyles from "./Header.styles";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const styles = useStyles()();

  return (
    <Box
      className={styles.classes.headerContainer}
      component="header"
      py="1rem"
    >
      <Box>
        <Typography className={styles.classes.headerButton}>
          All CHARACTERS
        </Typography>
      </Box>
      <Typography className={styles.classes.headerTitle}>
        rick and morty
      </Typography>
    </Box>
  );
};

export default Header;
