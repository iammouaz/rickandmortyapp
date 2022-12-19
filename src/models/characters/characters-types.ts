export interface ICharactersListResponse {
  characters: {
    results: ICharacters[];
    __typename: string;
  };
}

export interface ICharacters {
  id: string;
  image: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  gender: "Female" | "Male" | "Genderless" | "unknown";
  type: String;
  origin: Location;
}

export interface IEpisodes {
  id: string;
  name: String;
  air_date: String;
  episode: String;
  characters: ICharacters[];
  created: String;
}
