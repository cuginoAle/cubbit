import { createGlobalStyle } from "styled-components";
import "normalize.css";

const CssBaseline = createGlobalStyle`   
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'); 
  html {
    font-size: 62.5%;
  }
  html,
  body {
    padding: 0;
    margin: 0;    
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }
`;
export default CssBaseline;
