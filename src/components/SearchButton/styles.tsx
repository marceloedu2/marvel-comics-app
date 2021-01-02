import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const SearchButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: ${theme.border.radius};
    input {
      width: 25rem;
      height: 4rem;
      border: none;
      color: ${theme.colors.TextLight};
      background-color: ${theme.colors.Back};
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
      padding: 0 ${theme.spacings.xsmall};
    }
    button {
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.Back};
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
      &:hover {
        background-color: ${darken(0.04, theme.colors.Back)};
      }
      svg {
        font-size: ${theme.font.sizes.xxlarge};
      }
    }
  `}
`
