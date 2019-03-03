import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskCard from './TaskCard';
import { MDBCardText } from 'mdbreact';

configure({ adapter: new Adapter() });

describe('<TaskCard />', () => {
    it('should render a card with the passed-in id prop', () => {
        const wrapper = shallow(<TaskCard id={2} />);
        expect(wrapper.find(MDBCardText).get(0).props.children).toContain('Task number 2');
        wrapper.setProps({ id: 3 });
        expect(wrapper.find(MDBCardText).get(0).props.children).toContain('Task number 3');
    });
});
