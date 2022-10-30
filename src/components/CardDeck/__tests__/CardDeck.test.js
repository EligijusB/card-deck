import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import CardDeck from "..";

describe("<CardDeck />", () => {

    it("Should render correctly", () => {
        const comp = renderer.create(<CardDeck />);
        expect(comp.toJSON()).toMatchSnapshot();
    });

    it('Should allow user to sort and reset the deck', () => {
        render(<CardDeck />);
        const originalFirstCard = screen.getAllByRole('img')[0];

        fireEvent.click(screen.getByText("Sort"));
        let newFirstCard = screen.getAllByRole('img')[0];
        expect(originalFirstCard).not.toEqual(newFirstCard);

        fireEvent.click(screen.getByText("Reset"));
        newFirstCard = screen.getAllByRole('img')[0];
        expect(originalFirstCard).toEqual(newFirstCard);
    });

    it('Should allow user to shuffle', async () => {
        const {container} = render(<CardDeck />);
        const originalDeck = container.querySelector('[data-testid="deck"]');

        fireEvent.click(screen.getByText("Shuffle"));

        const newDeck = screen.getAllByRole('img')[0];
        expect(originalDeck).not.toEqual(newDeck);
    });

    it('Should allow user to draw', () => {
        render(<CardDeck />);

        expect(screen.queryByTestId("hand")).not.toBeInTheDocument();

        fireEvent.click(screen.getByText("Draw"));

        expect(screen.getByTestId("hand")).toBeInTheDocument();
    });

});