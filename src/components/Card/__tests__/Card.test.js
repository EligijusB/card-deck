import renderer from "react-test-renderer";
import Card from "..";

describe("<Card />", () => {
    const props = {
        title: "Test Card",
        src: "http://someImage.jpeg"
    };

    it("Should render correctly", () => {
        const comp = renderer.create(<Card {...props} />);
        expect(comp.toJSON()).toMatchSnapshot();
    });

});