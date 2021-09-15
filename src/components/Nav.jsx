import React from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
`
const List = styled.div`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    span {
        margin-left: .5rem;
    }
`
const Navbar = () => {
    return ( 
        <>
            <header>
                <Nav>
                    <List>
                        <span>Inicio</span>
                    </List>
                </Nav>
            </header>
        </>
        );
}
 
export default Navbar;