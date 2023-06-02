import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

function UsersPage() {


    return (
        <Container>
            <Sidebar/>
            <Wrapper>
                <h3>Users</h3>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
padding: 0;
margin: 0;
display: flex;
flex-direction: row;
`;

const Wrapper = styled.div`
width: 80%;
margin-left: 20%;
padding: 10px;
`
export default UsersPage;