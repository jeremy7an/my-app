import renderer from 'react-test-renderer';
import { RadioButton } from "../RadioButton";


it("radio button matches snapshot", () => {
  const tree = renderer.create(<RadioButton label="label" value="value" name="name" />).toJSON();
  expect(tree).toMatchSnapshot();
  
});