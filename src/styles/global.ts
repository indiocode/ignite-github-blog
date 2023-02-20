/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${({ theme }) => theme['blue']};
    }
    
    body{
        background-color: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
        --webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button{
        font: 400 1rem 'Nunito', sans-serif;
    }

    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      }
    }
`;
