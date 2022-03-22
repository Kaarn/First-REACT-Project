import React from 'react';
import CardList from './content/card_list';

import Header from './header/header';
import "../assets/sass/app/style.css"

const App = () => {
    return (
        <main>
            <Header />
            <CardList />
        </main>
    )
}

export default App;