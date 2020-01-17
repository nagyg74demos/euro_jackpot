import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Navigation, INavigation } from './navigation';
import { INavigationItem } from '../navigation-item/navigation-item';

configure({ adapter: new Adapter() });

describe('Navigation Component', () => {

    test('shallow renders a navigation', () => {
        const navDetails: INavigation = {
            title: 'NavTitle',
            items: [
                {
                    text: 'navItem1',
                    url: 'testLink1'
                }, {
                    text: 'navItem2',
                    url: 'testLink2'
                }
            ] as INavigationItem[],
            classes: 'test-class'
        };

        const wrapper = shallow(<Navigation  {...navDetails}/>);

        expect(wrapper.find('.navigation').exists()).toBeTruthy();
        expect(wrapper.find(`.${navDetails.classes}`).exists()).toBeTruthy();
        expect(wrapper.find('.navigation__title').exists()).toBeTruthy();
        expect(wrapper.find('.navigation__title').text()).toEqual(navDetails.title);
        expect(wrapper.find('NavigationItem')).toHaveLength(navDetails.items.length);
        expect(wrapper.find('NavigationItem').at(0).prop('text')).toEqual(navDetails.items[0].text);
        expect(wrapper.find('NavigationItem').at(0).prop('url')).toEqual(navDetails.items[0].url);
        expect(wrapper.find('NavigationItem').at(1).prop('text')).toEqual(navDetails.items[1].text);
        expect(wrapper.find('NavigationItem').at(1).prop('url')).toEqual(navDetails.items[1].url);

    });
});
