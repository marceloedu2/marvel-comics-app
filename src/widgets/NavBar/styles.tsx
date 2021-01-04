import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.menu};
    width: 100%;
    height: 6rem;
    display: flex;
    position: fixed;
    top: 0;
    justify-content: center;
    background-color: ${theme.colors.Cinnabar};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      cursor: pointer;
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`

export const ContentLogo = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${theme.font.bord};
    img {
      cursor: pointer;
      width: 6rem;
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const LinksContent = styled.div`
  ${({ theme }) => css`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.large};
  `}
`
export const LinkButton = styled.a<{ active?: boolean }>`
  ${({ theme, active }) => css`
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100%;

    margin: 0 ${theme.spacings.small};
    cursor: pointer;
    border-bottom: 0.2rem solid;
    border-bottom-color: transparent;
    transition: border-bottom-color 0.2s;
    color: ${theme.colors.TextLight};
    &:hover {
      color: ${darken(0.15, theme.colors.TextLight)};
    }
    ${active &&
    css`
      color: ${theme.colors.TextLight};
      border-bottom-color: ${theme.colors.TextLight};
      &:hover {
        border-bottom-color: ${darken(0.15, theme.colors.TextLight)};
      }
    `}
    svg {
      margin-right: ${theme.spacings.xxxsmall};
    }
  `}
`

export const Profile = styled.div`
  ${({ theme }) => css`
    display: flex;
    img {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      margin-right: ${theme.spacings.xsmall};
      border: 0.2rem double ${theme.colors.Primary};
      padding: 0.2rem;
    }
    > div {
      display: flex;
      flex-direction: column;

      justify-content: flex-end;
      text-align: right;
      margin-right: ${theme.spacings.xxxsmall};
      cursor: default;
      > a {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        font-size: ${theme.font.sizes.small};
        border-bottom: 0.2rem solid;
        border-bottom-color: transparent;
        color: ${theme.colors.BackgroundLight};
        cursor: pointer;
        p {
          border-bottom: 0.1rem solid transparent;
          &:hover {
            color: ${darken(0.15, theme.colors.BackgroundLight)};
            border-bottom: 0.1rem solid
              ${darken(0.15, theme.colors.BackgroundLight)};
          }
        }
      }
    }
  `}
`

export const ContentProfile = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.large};

    button {
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: transparent;
      transition: background-color 0.2s;
      &:hover {
        background-color: ${theme.colors.Primary};
      }
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  `}
`
