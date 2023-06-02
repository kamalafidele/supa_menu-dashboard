import React from 'react';
import styled from 'styled-components';
import COLOR_PALETTE from '../constants/colors';

function Button({ onClick, text, width = 50, ...otherProps }) {
    return (
        <ButtonElement onClick={onClick} style={{ width: `${width}%` }} {...otherProps}>{text}</ButtonElement>
    );
}
const ButtonElement = styled.button`
background-color: ${COLOR_PALETTE.PRIMARY};
color: ${COLOR_PALETTE.WHITE};
text-align: center;
height: 45px;
border-radius: 7px;
border: none;
font-size: 18px;
cursor: pointer;
`;

export default Button;
