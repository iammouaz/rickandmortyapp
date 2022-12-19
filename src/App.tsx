import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "api/charactersRequests/charactersList";

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);


  return <div></div>;
}

export default App;
