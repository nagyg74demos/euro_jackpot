import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PrizeTier } from './prize-tier';

configure({ adapter: new Adapter() });

describe('Prize Tier Component', () => {

    test('shallow renders a prize tier', async () => {

        const prize = {
                order: 3,
                winners: 8,
                specialPrize: 9,
                prize: 3000,
            }
        ;
        const wrapper = shallow(<PrizeTier prize={prize} rank={1}/>);
        console.log(wrapper.debug());

        expect(wrapper.find('.prize-tier__rank').exists()).toBeTruthy();
        expect(wrapper.find('.prize-tier__rank').text()).toEqual('I');

        const tierMatch = [5, 2];
        expect(wrapper.find('.prize-tier__match').exists()).toBeTruthy();
        expect(wrapper.find('.prize-tier__match').text()).toEqual(`5 Numbers + 2 Euronumbers`);
        expect(wrapper.find('.prize-tier__match').text()).toContain(`${tierMatch[0]}`);
        expect(wrapper.find('.prize-tier__match').text()).toContain(`${tierMatch[1]}`);

        expect(wrapper.find('NumberFormat')).toHaveLength(2);
    });
});





