import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface ContainerProps {
  type?: 'success' | 'error' | 'info'
}
const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}

export const Container = styled(animated.div)<ContainerProps>`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    width: 36rem;
    position: relative;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium}
      ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    box-shadow: Calc(${theme.spacings.xsmall} / 2)
      Calc(${theme.spacings.xsmall} / 2) ${theme.spacings.xxsmall}
      ${theme.colors.Shadow};

    & + div {
      margin-top: ${theme.spacings.xxsmall};
    }

    ${toastTypeVariations[type || 'info']}

    > svg {
      margin: ${theme.spacings.xxxsmall} ${theme.spacings.xsmall} 0 0;
    }
    div {
      flex: 1;
      p {
        margin-top: ${theme.spacings.xxxsmall};
        font-size: ${theme.font.sizes.small};
        opacity: 0.8;
        line-height: 2rem;
      }
    }
    button {
      position: absolute;
      right: 1rem;
      top: 1rem;
      opacity: 0.6;
      border: 0;
      background: transparent;
      color: inherit;
    }
    ${() => css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
  `}
`
