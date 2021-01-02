import styled, { css } from 'styled-components'

export const TooltipContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    > span {
      width: 16rem;
      height: auto;
      background-color: ${props => props.theme.colors.Primary};
      padding: ${theme.spacings.xxsmall};
      border-radius: ${theme.border.radius};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.normal};
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s;

      position: absolute;
      bottom: calc(100% + ${theme.spacings.xsmall});
      left: 50%;
      transform: translatex(-50%);
      color: ${theme.colors.TextLight};

      &::before {
        content: '';
        border-style: solid;
        border-color: ${theme.colors.Primary} transparent;
        border-width: ${theme.border.radius} ${theme.border.radius} 0
          ${theme.border.radius};
        bottom: 2rem;
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translatex(-50%);
      }
    }
    &:hover span {
      opacity: 1;
      visibility: visible;
    }
  `}
`
