import './navigation-item.scss';
import React from 'react';

export enum LinkTarget {
    SELF = '_self',
    BLANK = '_blank',
    PARENT = '_parent',
    TOP = '_top',
}

export interface INavigationItem {
    text: string;
    url?: string;
    target?: LinkTarget;
}

export const NavigationItem : React.FC<INavigationItem> = ({text, url, target}: INavigationItem) => {

    const linkProps: { href?: string, target?: LinkTarget } = {};
    if (url) linkProps.href = url;
    if (target) linkProps.target = target;

  return (
      <a className="navigation__item" {...linkProps}>{text}</a>
  )
};
