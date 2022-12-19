import { Box, Grid, Typography } from "@mui/material";
import { ICharacters } from "models/characters/characters-types";
import useStyles from "./CharactersCard.styles";

interface CharactersCardProps {
  data: ICharacters;
}

const CharactersCard: React.FunctionComponent<CharactersCardProps> = ({
  data,
}) => {
  const styles = useStyles(data.image)();
  return (
    <Grid className={styles.classes.cardItem} xs={6} md={3} xl={2} item py={2}>
      <Box className={styles.classes.boxContainer} />
      <Typography fontWeight={800} fontSize="1.3rem">
        {data.name}
      </Typography>
    </Grid>
  );
};

export default CharactersCard;
