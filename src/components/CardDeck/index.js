import { useCallback, useState } from "react";
import cardDeck from "../../mocks/card-deck";
import Card from "../Card";

import "./index.scss";

const CardDeck = () => {
    const [deck, setDeck] = useState(cardDeck);
    const [hand, setHand] = useState([]);

    const handleShuffle = useCallback(() => {
        const shuffledDeck = deck.slice();
        shuffledDeck.sort(() => Math.random() - 0.5);
        setDeck(shuffledDeck);
    }, [deck]);

    const handleDraw = useCallback(() => {
        let randomIndex = null;
        let card = null
        do {
            randomIndex = Math.floor(Math.random() * 51);
            card = deck[randomIndex];
        } while (card == null);

        setHand(hand.concat(card));
        const newDeck = deck.slice();
        newDeck.splice(randomIndex, 1);
        setDeck(newDeck);
    }, [hand, deck]);

    const handleReset = useCallback(() => {
        setHand([]);
        setDeck(cardDeck);
    }, []);

    const handleSort = useCallback(() => {
        const sortedDeck = deck.slice();
        sortedDeck.sort((a, b) => a.value === b.value ? a.suit.localeCompare(b.suit) : a.value - b.value);
        setDeck(sortedDeck);
    }, [deck]);

    return (
        <div className="card-deck" data-testid="card-deck">
            <div className="deck-actions">
                <div>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleSort}>Sort</button>
                    <button onClick={handleShuffle}>Shuffle</button>
                    <button onClick={handleDraw}>Draw</button>
                </div>
                {hand.length > 0 &&
                    <div data-testid="hand">
                        <div>Your hand:</div>
                        {hand.map(({ title, src }) => <Card key={title} title={title} src={src} />)}
                    </div>
                }
            </div>
            <div className="deck" data-testid="deck">
                {deck.map(({ title, src }) => <Card key={title} title={title} src={src} />)}
            </div>
        </div>
    );
};

export default CardDeck;