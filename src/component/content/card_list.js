import React, { Fragment, useEffect, useState } from "react";
import { toModel } from "../../models/card_model";
import { getAllCards, searchingCard } from "../../services/card_list_service";
import CardOne from "./card_one";

import "../../assets/sass/cardList/style.css";

const CardList = () => {

    const [cardList, setCardList] = useState([]);
    const [numberCard, setNumberCard] = useState(10);
    const [typeCard, setTypeCard] = useState('new');
    const [searchCard, setSearchCard] = useState('');

    useEffect( () => {
        if (searchCard.length > 2) {
            searchingCard(searchCard)
                .then(json => {
                    setCardList(toModel(json).cards);
                })
        }
        getAllCards(numberCard, typeCard)
            .then(json => {
                setCardList(toModel(json).cards);
            })
    }, [numberCard, typeCard, searchCard]);


    const sort = (e) => {
        setNumberCard(e.target.value);
    }

    const filter = (f) => {
        setTypeCard(f.target.value);
    }

    const search = (s) => {
        setSearchCard(s.target.value);
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
                <select onChange={filter} defaultValue={typeCard}>
                    <option value="atk">ATK</option>
                    <option value="def">DEF</option>
                    <option value="name">NOM</option>
                    <option value="type">TYPE</option>
                    <option value="level">LVL</option>
                    <option value="id">ID</option>
                    <option value="new">NEW</option>
                </select>
                <input type="search" placeholder="Rechercher..." onChange={search} />
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