import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --plyr-color-main: hotpink;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background:#000;
    color: #fff;
    font-family:sans-serif;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: crimson;

    &:hover {
      background-color: #FFCC8F;
    }
  }
  a{
    color: inherit;
    text-decoration: unset;
  }

  #nprogress .bar {
    background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet) !important;
    height:6px;
  }

  #nprogress .spinner-icon {
    width: 30px;
    height: 30px;
    border-width: 5px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: hotpink;
    border-bottom-color: hotpink;
  }

  iframe .html5Container .layer {
    margin: auto;
    padding: 2%;
    display: table;
    text-align: center;
    background-color: #000;
    min-height: 126px;
    position: relative;
    width: 70%;
}
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 47px;
  position: relative;
  @media (max-width: 530px) {
    max-width: unset;
    width: 100%;
    padding: 0;
  }
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;