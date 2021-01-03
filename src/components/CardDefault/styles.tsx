import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 25.5rem;
  height: 38rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 25rem;
    height: 37.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.Emperor};

    border-radius: ${theme.border.radius};
    cursor: pointer;

    transition: width 0.3s, height 0.3s;
    svg {
      font-size: ${theme.font.sizes.xxxlarge};
      transition: font-size 0.3s;
    }
    &:hover {
      width: 25.5rem;
      height: 38rem;
      svg {
        font-size: 4.3rem;
      }
    }
  `}
`
