import renderer from "react-test-renderer";
import { GET_CHARACTERS } from "graphqModels/character/characters.query";
import { MockedProvider } from "@apollo/client/testing";
import App from "App";

const mockCharactersData = [
  {
    request: {
      query: GET_CHARACTERS,
    },
    result: {
      data: {
        id: "4",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        name: "Beth Smith",
        status: "Alive",
        gender: "Female",
        type: "Human",
      },
    },
  },
];

it("Getting the list without errors", () => {
  const component = renderer.create(
    <MockedProvider addTypename={false} mocks={mockCharactersData}>
      <App />
    </MockedProvider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toBeTruthy();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
