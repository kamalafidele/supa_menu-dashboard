import React from 'react';
import styled from 'styled-components';
import authStorage from '../auth/storage';


import Sidebar from '../components/Sidebar';
import DashboardTopNav from '../components/DashboardTopNav';
import jwtDecode from 'jwt-decode';


function ClientsPage() {
    const token = authStorage.getToken();
    const user = jwtDecode(token);

    return (
        <Container>
            <Sidebar/>
            <Wrapper>
                <DashboardTopNav user={user} title={'Clients'}/>
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
export default ClientsPage;