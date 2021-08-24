import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '@components/Nav/Navbar';
import Footer from '@components/Footer';

import SideNav from '@components/Nav/SideNav';
import { PoolStore } from '@context/PoolContext';
import { SwapStore } from '@context/SwapContext';
import { useRouter } from 'next/router';
import Exchange from '@archetypes/Exchange';

const EXCHANGE = 0;
const BROWSE = 1;

export default (() => {
    const router = useRouter();

    const setPage = (index: number) => {
        if (index === BROWSE) {
            router.push({
                pathname: '/browse',
            });
        } // else do nothing
    };
    useEffect(() => {
        router.prefetch('/browse');
    }, []);

    return (
        <Page className={`page`}>
            <NavBar />
            <PoolStore>
                <Container className="container">
                    <SideNav className="side-nav" selected={EXCHANGE} setTab={setPage} tabs={['Exchange', 'Browse']} />
                    <SwapStore>
                        <Exchange />
                    </SwapStore>
                </Container>
            </PoolStore>
            <Footer />
        </Page>
    );
}) as React.FC;

const Page = styled.div`
    position: relative;
    background: var(--color-background);
`;

const Container = styled.div`
    display: flex;
    .side-nav {
        width: 20vw;
    }
`;
