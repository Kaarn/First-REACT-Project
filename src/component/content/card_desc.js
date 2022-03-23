import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

import { toModel } from "../../models/card_model";
import { findById } from "../../services/card_list_service";

const CardDesc = () => {
    const { idCard } = useParams();

    const [cards, setCards] = useState();

    useEffect(() => {
        findById(idCard)
            .then(obj => {
                const cards = toModel(obj).cards;
                if (cards.length > 0) {
                    setCards(cards[0]);
                }
            })
    }, [])

    return (
    <div>
        {cards &&
            <Fragment>
                <p>{cards.name}</p>
                <p>Type : {cards.type}</p>
                <p>Race : {cards.race}</p>
                <p>{cards.description}</p>
                <p><img src={cards.imageMedium} alt="" /></p>
                <p>Prix : {cards.cardPrices}</p>
            </Fragment>
        }
    </div>
    )
}

export default CardDesc;