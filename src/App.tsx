import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import CharactersCard from "components/Cards/CharactersCard/CharactersCard";
import Layout from "components/layout/Layout/Layout";
import CharactersCardSkeleton from "components/skeleton/CharactersCardSkeleton/CharactersCardSkeleton";
import { GET_CHARACTERS } from "graphqModels/character/characters.query";
import { ICharactersListResponse } from "models/characters/characters-types";
import { useRecoilState } from "recoil";
import { charactersAtom } from "recoil/atoms";


function App() {
  //Getting Rick and Morty Characters from the api
  const { loading, data } = useQuery<ICharactersListResponse>(GET_CHARACTERS);

  //Init Recoil State (Only to show it)
  // const [characters, setCharacters] = useRecoilState(charactersAtom);

  return (
    <Layout>
      <Grid container>
        {loading ? (
          [...new Array(12)].map(() => <CharactersCardSkeleton />)
        ) : (
          <>
            {data?.characters.results.map((item) => (
              <CharactersCard key={item.id} data={item} />
            ))}
          </>
        )}
      </Grid>
    </Layout>
  );
}

export default App;
