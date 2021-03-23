import Card from "./Card"
import React, { useState } from "react";

const CardsSelector = (props) => {

    const [lastClick, setLastClick] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);

    const entries = [
        {
            char: '今',
            knowledge: 0.3,
            selected: false
        },
        {
            char: '日',
            knowledge: 0.7,
            selected: false
        },
        {
            char: '良',
            knowledge: 0,
            selected: true
        },
        {
            char: '天',
            knowledge: -1,
            selected: false
        },
        {
            char: '気',
            knowledge: 0,
            selected: false
        }
    ]

    const handleClick = (index) => {
        let future = selectedCards;
        if (future.indexOf(index) > -1) {
            setSelectedCards(future.filter((entry) => entry != index));
        } else {
            future.push(index);
            setSelectedCards(future);
        }
        //why do I need to update this state to have an effect on the display???
        setLastClick(lastClick + 1);
    };

    return (
        <div>
            <div className="cards">
                {entries.map((entry, index) => {
                    return (
                        <Card
                            char={entry.char}
                            knowledge={entry.knowledge}
                            handleClick={(e) => handleClick(index)}
                            selected={selectedCards.indexOf(index) > -1} />
                    )
                }
                )}
            </div>
        </div>


    )
}

export default CardsSelector