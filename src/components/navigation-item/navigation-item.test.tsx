import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { INavigationItem, LinkTarget, NavigationItem } from './navigation-item';

configure({ adapter: new Adapter() });

describe('Navigation Item Component}', () => {

    test('shallow renders a navigation item with text', () => {
        const navItemDetails: INavigationItem = {
            text: 'NavItemTitle',
        };

        const wrapper = shallow(<NavigationItem  {...navItemDetails}/>);
        const navItem = wrapper.find('.navigation__item');

        expect(navItem.text()).toEqual(navItemDetails.text);
        expect(navItem.prop('href')).toEqual(undefined);
        expect(navItem.prop('target')).toEqual(undefined);
    });

    test('shallow renders a navigation item with text and href', () => {
        const navItemDetails: INavigationItem = {
            text: 'NavItemTitle',
            url: '/thispage',
        };

        const wrapper = shallow(<NavigationItem  {...navItemDetails}/>);
        const navItem = wrapper.find('.navigation__item');

        expect(navItem.text()).toEqual(navItemDetails.text);
        expect(navItem.prop('href')).toEqual(navItemDetails.url);
        expect(navItem.prop('target')).toEqual(undefined);
    });

    test('shallow renders a navigation item with every property', () => {
        const navItemDetails: INavigationItem = {
            text: 'NavItemTitle',
            url: '/thispage',
            target: LinkTarget.SELF,
        };

        const wrapper = shallow(<NavigationItem  {...navItemDetails}/>);
        const navItem = wrapper.find('.navigation__item');

        expect(navItem.text()).toEqual(navItemDetails.text);
        expect(navItem.prop('href')).toEqual(navItemDetails.url);
        expect(navItem.prop('target')).toEqual(navItemDetails.target);
    });
});
