import React from 'react';
import './app.scss';
import { Results } from '../results/results';

export const App = () => {
    return (
        <div className="app">
            <header className="app__header">
                {/* TODO add navigation */}
            </header>
            <article className="article container">
                {/* TODO add subnavigation */}
                <header className="article__header">
                    <h1>EuroJackpot Results & Winning Numbers</h1>
                    { /* TODO Draw selector  */}
                </header>
                <Results/>
            </article>
            <footer>
                {/* TODO fill footer */}
            </footer>
        </div>
    );
};
