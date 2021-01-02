import styled, { css, keyframes } from 'styled-components'
import { darken } from 'polished'

const rotateSpinner = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

interface StylesProps {
  color?: string
}

export const ContainerButton = styled.button<StylesProps>`
  ${({ theme, color }) => css`
    height: 5rem;
    padding: 0 ${theme.spacings.medium};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.radius};

    color: ${theme.colors.TextLight};
    font-size: ${theme.font.sizes.medium};
    background: ${color ? color : theme.colors.Primary};
    transition: background 0.2s;

    &:hover {
      ${color
        ? css`
            background: ${darken(0.04, color)};
          `
        : css`
            background: ${darken(0.04, theme.colors.Primary)};
          `};
    }
  `}
`
export const ButtonSpinner = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      flex: 1;
      font-size: ${theme.spacings.small};
      color: ${theme.colors.Light};
      animation: ${rotateSpinner} 1s linear infinite;
    }
  `}
`
