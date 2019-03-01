import React from 'react';
import { MDBBtn, MDBContainer} from 'mdbreact';

const controlButtons = (props) => {
    return (
        <MDBContainer fluid className='mt-5 d-flex justify-content-center'>
            <MDBBtn className='px-4 py-sm-3 px-sm-5' outline color='primary' onClick={props.add}>Add</MDBBtn>
            <MDBBtn className='px-3 py-sm-3 px-sm-5' outline color='warning' onClick={props.remove}>Remove</MDBBtn>
            <MDBBtn className='px-3 py-sm-3 px-sm-5' outline color='danger' onClick={props.clear}>Clear</MDBBtn>
        </MDBContainer>
    )
}

export default controlButtons;