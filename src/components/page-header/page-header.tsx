import React from 'react';
import { Navigation } from '../navigation/navigation';
import { INavigationItem } from '../navigation-item/navigation-item';
import './page-header.scss';
import navigations from '../../assets/navigations.json';

const mainMenuItems: INavigationItem[] = navigations.main.items as INavigationItem[];

export const PageHeader: React.FC = () => {

    return (
        <section className="page-header">
            <div className="page-header__logo-wrapper container">
                <a
                    href="https://www.lottoland.com/en"
                    className="page-header__logo-link"
                    title="Play Lotto Online and win Millions at Lottoland.com">
                    <img
                        src="ll-logo-green.svg"
                        alt="LottoLand logo"
                        className="page-header__logo"
                    />
                </a>
            </div>
            <div className="page-header__navigation">
                <Navigation items={mainMenuItems} classes='main-menu horizontal container'/>
            </div>
        </section>
    );
};
