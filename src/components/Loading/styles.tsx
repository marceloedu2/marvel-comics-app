import styled, { keyframes } from 'styled-components'

const rotateSpinner = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.2);
  > svg {
    font-size: 42px;
    color: ${props => props.theme.colors.Primary};
    animation: ${rotateSpinner} 1s linear infinite;
  }
`
