import React from 'react';
import './app.css';
import Results from '../results/results';

export const App = () => {
    return (
        <div className="App">
            <header className="AppHeader">
                {/* TODO add navigation */}
            </header>
            <article>
                {/* TODO add subnavigation */}
                <header className="ArticleHeader">
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
