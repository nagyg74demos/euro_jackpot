import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DrawSelector } from './draw-selector';

configure({ adapter: new Adapter() });

describe('DrawSelector component', () => {

    test('shallow renders two dropdowns', () => {
        const wrapper = mount(<DrawSelector/>);

        expect(wrapper.find('.draw-selector__date').exists()).toBeTruthy();
        expect(wrapper.find('.draw-selector__year').exists()).toBeTruthy();

        expect(wrapper.find('.draw-selector__year').find('option')).toHaveLength(9);
        expect(wrapper.find('.draw-selector__date').find('option')).toHaveLength(3);

    });
});
