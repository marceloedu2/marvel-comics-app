import styled, { css } from 'styled-components'
import Tooltip from '@/components/Tooltip'

interface IContainerInput {
  alertError: boolean
  isFocus: boolean
}

export const ContainerInput = styled.div<IContainerInput>`
  ${({ theme, alertError, isFocus }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.xxxsmall} 0;

    > div {
      height: 5rem;
      border-radius: ${theme.border.radius};
      box-shadow: 0 1.8rem 6.4rem -0.9rem ${theme.colors.Shadow};
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.Background};
      > input {
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: ${theme.border.radius};
        padding: 0 ${theme.spacings.xsmall};
        color: ${theme.colors.TextLight};
        background-color: ${theme.colors.Background};
        &:disabled {
          cursor: no-drop;
          background-color: rgba(0, 0, 0, 0.07);
        }
      }
      svg {
        margin: 0 16px;
      }
      ${alertError &&
      css`
        border: 0.1rem solid ${theme.colors.Danger};
        > label {
          color: ${theme.colors.Danger};
        }
        svg {
          font-size: 2rem;
          color: ${theme.colors.Danger};
        }
        > span {
          display: block;
        }
      `}
      ${isFocus &&
      css`
        border: 0.1rem solid ${theme.colors.Primary};
        > label {
          color: ${theme.colors.Primary};
        }
        svg {
          color: ${theme.colors.Primary};
        }
      `}

    *::placeholder {
        color: ${theme.colors.Dark};
      }
      > span {
        display: none;
        font-weight: ${theme.font.bord};
        font-size: ${theme.font.sizes.small};
        margin-top: ${theme.spacings.xxxsmall};
        color: ${theme.colors.Danger};
      }
    }
  `}
`
export const InputError = styled(Tooltip)`
  ${({ theme }) => css`
    height: 2rem;
    margin-left: ${theme.spacings.xsmall};
    svg {
      margin: 0;
    }
    span {
      background-color: ${theme.colors.Danger};
      &::before {
        border-color: ${theme.colors.Danger} transparent;
      }
    }
  `}
`
export const InitialTextContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    margin-left: ${theme.spacings.xxxsmall};
    text-align: center;
    font-weight: ${theme.font.bord};
    color: ${theme.colors.Dark};
    margin-right: calc(-${theme.spacings.xxsmall});
  `}
`
