import React from 'react';
import { MDBCard, MDBCardText } from 'mdbreact';

export default ({id}) => {
    return (
        <MDBCard className='card-body w-50 m-1'>
            <MDBCardText>{`Task number ${id}`}</MDBCardText>
        </MDBCard>
    )
}