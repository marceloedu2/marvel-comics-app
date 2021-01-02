import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 25.5rem;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-direction: column;
`
export const ImageContainer = styled.div<{ imgUrl: string }>`
  ${({ theme, imgUrl }) => css`
    width: 25rem;
    height: 37.5rem;
    display: flex;
    position: relative;

    cursor: pointer;
    background-image: url(${imgUrl});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: ${theme.border.radius};
    margin-bottom: 0.5rem;
    transition: width 0.3s, height 0.3s, margin-bottom 0.3s;
    &:hover {
      width: 25.5rem;
      height: 38rem;
      margin-bottom: 0;
    }
  `}
`

export const info = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.xlarge} 0;
    h3 {
      flex: 1;
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.normal};
    }
  `}
`
export const ButtonFavorite = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: ${theme.spacings.xsmall};
    right: ${theme.spacings.xsmall};
    background-color: ${theme.colors.Shark};
    border-radius: 50%;
    padding: ${theme.spacings.xxxsmall};
    border: 0.2rem solid ${theme.colors.Shark};
    transition: background-color 0.2s;
    &:hover {
      background-color: ${darken(0.04, theme.colors.Shark)};
    }
    svg {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.Cinnabar};
    }
  `}
`
