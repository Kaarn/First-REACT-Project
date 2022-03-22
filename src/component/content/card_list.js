import React, { Fragment, useEffect, useState } from "react";
import { toModel } from "../../models/card_model";
import getAllCards from "../../services/card_list_service";
import CardOne from "./card_one";

import "../../assets/sass/cardList/style.css";

const CardList = () => {

    const [cardList, setCardList] = useState([]);
    const [numberCard, setNumberCard] = useState(10);

    useEffect( () => {
        getAllCards(numberCard)
            .then(json => {
                setCardList(toModel(json).cards);
            })
    }, [numberCard]);

    const sort = (e) => {
        setNumberCard(e.target.value);
    }


    return (
        <Fragment>
            <div className="sort">
                <select onChange={sort} defaultValue={numberCard}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <section>
            {
                cardList &&
                cardList.map(c => <CardOne key={(c.id)} card={c} />)
            }
            </section>
        </Fragment>
    )
}

export default CardList;