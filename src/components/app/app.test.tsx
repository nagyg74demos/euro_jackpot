import React from 'react';
import { App } from './app';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import navigationsData from '../../assets/navigations.json';

configure({ adapter: new Adapter() });

describe('App Component', ()=> {
    const wrapper = shallow(<App/>);

    console.log(wrapper.debug());
    expect(wrapper.find('PageHeader')).toHaveLength(1);
    expect(wrapper.find('.article__header').text()).toContain('EuroJackpot Results')
    expect(wrapper.find('DrawSelector')).toHaveLength(1);
    expect(wrapper.find('Results')).toHaveLength(1);
    expect(wrapper.find('Navigation')).toHaveLength(6);
    expect(wrapper.find('Navigation').at(0).prop('title')).toEqual(navigationsData.lottery.title);
    expect(wrapper.find('Navigation').at(0).prop('classes')).toEqual(navigationsData.lottery.classes);
});
