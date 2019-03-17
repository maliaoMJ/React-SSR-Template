import React from 'react'
import styled from 'styled-components'
import Main from "../layout/main";
const Title:any = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () =>
    <Main title={"hello this is about page"}>
        <Title>My About page</Title>
        <div>example sass</div>
    </Main>