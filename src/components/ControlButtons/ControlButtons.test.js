import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MDBBtn } from 'mdbreact';
import ControlButtons from './ControlButtons';

configure({adapter: new Adapter()});

describe('<MDBBtn />', () => {
    it('should call the add function when button clicked', () => {
        const addSpy = jest.fn();
        const wrapper = shallow(<ControlButtons add={addSpy} remove={() => {}} clear ={() => {}}/>);
        wrapper.find(MDBBtn).filter({ id: 'add' }).simulate('click');
        expect(addSpy).toHaveBeenCalled();
    });
    it('should call the remove function when button clicked', () => {
        const removeSpy = jest.fn();
        const wrapper = shallow(<ControlButtons add={() => {}} remove={removeSpy} clear ={() => {}}/>);
        wrapper.find(MDBBtn).filter({ id: 'remove' }).simulate('click');
        expect(removeSpy).toHaveBeenCalled();
    });
    it('should call the clear function when button clicked', () => {
        const clearSpy = jest.fn();
        const wrapper = shallow(<ControlButtons add={() => {}} remove={() => {}} clear ={clearSpy}/>);
        wrapper.find(MDBBtn).filter({ id: 'clear' }).simulate('click');
        expect(clearSpy).toHaveBeenCalled();
    });
});
