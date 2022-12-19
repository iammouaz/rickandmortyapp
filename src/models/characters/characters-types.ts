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
  status: string;
  gender: string;
  type: String;
}
