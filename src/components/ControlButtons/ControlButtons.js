import React from 'react';
import { MDBBtn, MDBContainer} from 'mdbreact';

export default ({add, remove, clear}) => {
    return (
        <MDBContainer fluid className='mt-3 d-flex justify-content-center'>
            <MDBBtn id='add' className='px-4 py-sm-3 px-sm-5' outline color='primary' onClick={add}>Add</MDBBtn>
            <MDBBtn id='remove' className='px-3 py-sm-3 px-sm-5' outline color='warning' onClick={remove}>Remove</MDBBtn>
            <MDBBtn id='clear' className='px-3 py-sm-3 px-sm-5' outline color='danger' onClick={clear}>Clear</MDBBtn>
        </MDBContainer>
    )
}