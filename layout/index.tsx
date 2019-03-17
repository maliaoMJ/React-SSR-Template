import React from 'react';
import Head from "next/head";
import styled from 'styled-components';
import AppFooter from "../components/AppFooter/";

const WrapperContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  padding-top:30px;
  background:linear-gradient( to top left, rgb(102, 223, 243), #673AB7 );
`;
const MainContainer = styled.div`
width: 100%;
flex:1;
display: block;
overflow: hidden;
`;
export default function({children = {},title="this is default title"}) {
    return (
        <WrapperContainer>
          <Head>
              <title>{title}</title>
              <meta charSet='utf-8' />
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <MainContainer>{children}</MainContainer>
        <AppFooter/>
        </WrapperContainer>
    )
}