import { Grid, Skeleton } from "@mui/material";
import useStyles from "./CharactersCardSkeleton.styles";

interface CharactersCardSkeletonProps {}

const CharactersCardSkeleton: React.FunctionComponent<
  CharactersCardSkeletonProps
> = () => {
  const styles = useStyles()();

  return (
    <Grid
      xs={6}
      md={3}
      xl={2}
      py={2}
      item
      className={styles.classes.skeletonBox}
    >
      <Skeleton
        sx={{ bgcolor: "grey.600" }}
        variant="rectangular"
        width={200}
        height={250}
        animation="wave"
      />
      <Skeleton width={200} sx={{ bgcolor: "grey.600" }} animation="wave" />
    </Grid>
  );
};

export default CharactersCardSkeleton;
