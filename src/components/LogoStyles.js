import styled from 'styled-components';

export const Logo = styled.img`
    height: 30px;
    position: fixed;
    top: 15px;
    left: 15px;
    animation: App-logo-spin infinite 20s linear;




    @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`;