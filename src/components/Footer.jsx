import React from 'react';
import styled from '@emotion/styled';

const Pie = styled.footer`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 100%;
    text-align: right;

`

const Footer = () => {
    return ( 
        <Pie>
            <p>
                Made with ♥ by Tom para Paisanos.io
            </p>
        </Pie>
     );
}
 
export default Footer;