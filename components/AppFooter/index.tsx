import React from "react";
import styled from 'styled-components';

const AppFooter = styled.footer`
  width:100%;
  height:80px;
  line-height: 80px;
  text-align: center;
  p{
    color:#fff;
    font-size: 14px;
  }
`;
export default function(){
    return <AppFooter><p>Copyright © 2017 - 2019 SuperMario, All Rights Reserved</p></AppFooter>
}