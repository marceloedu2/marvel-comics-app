import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    color: ${theme.colors.TextLight};
    background-color: ${theme.colors.Background};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin-top: 5.9rem;
  `}
`
