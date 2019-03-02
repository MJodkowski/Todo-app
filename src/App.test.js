import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { MDBBtn } from 'mdbreact';
import TaskCard from './components/TaskCard/TaskCard';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />);
    });
    it('should increment todo id in state when button is clicked', () => {
        wrapper.find(MDBBtn).filter({ id: 'add' }).simulate('click');
        expect(wrapper.state().todos).toEqual([{ id: 1 }]);

        wrapper.setState({ todos: [{ id: 1 }, { id: 2 }] });
        wrapper.find(MDBBtn).filter({ id: 'add' }).simulate('click');
        expect(wrapper.state().todos).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    })
    it('should increment todo id in state when button is clicked', () => {
        wrapper.find(MDBBtn).filter({ id: 'remove' }).simulate('click');
        expect(wrapper.state().todos).toEqual([]);

        wrapper.setState({ todos: [{ id: 1 }, { id: 2 }] });
        wrapper.find(MDBBtn).filter({ id: 'remove' }).simulate('click');
        expect(wrapper.state().todos).toEqual([{ id: 1 }]);
    })
    it('should increment todo id in state when button is clicked', () => {
        wrapper.find(MDBBtn).filter({ id: 'clear' }).simulate('click');
        expect(wrapper.state().todos).toEqual([]);

        wrapper.setState({ todos: [{ id: 1 }, { id: 2 }] });
        wrapper.find(MDBBtn).filter({ id: 'clear' }).simulate('click');
        expect(wrapper.state().todos).toEqual([]);
    });
});

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />);
    });
    it('should render no cards when state todos is empty', () => {
        expect(wrapper.find(TaskCard)).toHaveLength(0);
    });
    it('should render cards when state todos is not empty', () => {
        wrapper.setState({ todos: [{ id: 1 }, { id: 2 }] });
        expect(wrapper.find(TaskCard)).toHaveLength(2);
        wrapper.setState({ todos: [{ id: 1 }] });
        expect(wrapper.find(TaskCard)).toHaveLength(1);
    });
});
