import renderer from "react-test-renderer";
import CharactersCard from "components/Cards/CharactersCard/CharactersCard";

const mockCharactersData = {
  id: "1",
  image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  name: "Beth Smith",
  status: "Alive",
  gender: "Female",
  type: "Human",
};

it("The characters card rendered as expected", () => {
  const component = renderer.create(
    <CharactersCard data={mockCharactersData} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toBeTruthy();
  
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
