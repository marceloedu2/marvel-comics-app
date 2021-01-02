import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    right: 0;
    top: 5.9rem;
    padding: ${theme.spacings.large};
    overflow: hidden;
  `}
`
