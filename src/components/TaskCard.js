import React from 'react';
import { MDBCard, MDBCardText } from 'mdbreact';

const taskCard = (props) => {
    return (
        <MDBCard className='card-body w-50 m-1'>
            <MDBCardText>{`Task number ${props.id}`}</MDBCardText>
        </MDBCard>
    )
}

export default taskCard;