import React from 'react';
import './navigation.scss';
import { INavigationItem, NavigationItem } from '../navigation-item/navigation-item';

export interface INavigation {
    title?: string | HTMLElement | undefined;
    items: INavigationItem[];
    classes?: string | undefined;
}

export const Navigation: React.FC<INavigation> = ({ title, items, classes }: INavigation) => {
    const navClasses = [
        'navigation',
        classes ? classes : undefined,
    ];

    return (
        <nav className={navClasses.join(' ')}>
            {
                ( ( title ) ? <h3 className="navigation__title">{title}</h3> : null )
            }
            <div className="navigation__links">
                {
                    items.map((item: INavigationItem, index: number) => {
                        return <NavigationItem {...item} key={index}/>;
                    })
                }
            </div>
        </nav>
    )
};
