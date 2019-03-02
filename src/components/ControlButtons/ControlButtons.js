import React from 'react';
import { MDBBtn, MDBContainer} from 'mdbreact';

const controlButtons = (props) => {
    return (
        <MDBContainer fluid className='mt-3 d-flex justify-content-center'>
            <MDBBtn id='add' className='px-4 py-sm-3 px-sm-5' outline color='primary' onClick={props.add}>Add</MDBBtn>
            <MDBBtn id='remove' className='px-3 py-sm-3 px-sm-5' outline color='warning' onClick={props.remove}>Remove</MDBBtn>
            <MDBBtn id='clear' className='px-3 py-sm-3 px-sm-5' outline color='danger' onClick={props.clear}>Clear</MDBBtn>
        </MDBContainer>
    )
}

export default controlButtons;