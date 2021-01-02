import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.Background};
  `}
`
