import React from 'react';
import './app.scss';
import { Results } from '../results/results';
import { DrawSelector } from '../draw-selector/draw-selector';
import { PageHeader } from '../page-header/page-header';
import { INavigation, Navigation } from '../navigation/navigation';

import navigations from '../../assets/navigations.json';

const lotteryMenu: INavigation = navigations.lottery as INavigation;
const infoMenu: INavigation = navigations.info as INavigation;
const contactMenu: INavigation = navigations.contact as INavigation;
const gambleMenu: INavigation = navigations.gamble_safely as INavigation;
const countryMenu: INavigation = navigations.country as INavigation;
const languageMenu: INavigation = navigations.language as INavigation;

export const App = () => {
    return (
        <div className="app">
            <PageHeader/>
            <article className="article container">
                {/* TODO add subnavigation */}
                <header className="article__header">
                    <h1>EuroJackpot Results & Winning Numbers</h1>
                    { /* TODO Draw selector  */}
                    <DrawSelector/>
                </header>
                <Results/>
            </article>
            <footer>
                <div className="breadcrumbs">
                    <ol className="breadcrumbs__list container">
                        <li className="breadcrumbs__item">Lottoland</li>
                        <li className="breadcrumbs__item">EuroJackpot</li>
                        <li className="breadcrumbs__item active">EuroJackpot Results &amp; Winning Numbers</li>
                    </ol>
                </div>
                <section className="footer-navigation container">
                    <Navigation {...lotteryMenu}/>
                    <Navigation {...infoMenu}/>
                    <Navigation {...contactMenu}/>
                    <Navigation  {...gambleMenu}/>
                    <Navigation {...countryMenu}/>
                    <Navigation {...languageMenu}/>
                </section>
            </footer>
        </div>
    );
};
