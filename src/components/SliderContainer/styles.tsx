import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    && {
       .slick-arrow {
          display: none !important;
       }
      .slick-dots {
        display: flex!important;
        justify-content: center;
        list-style: none;

        align-items: center;
        justify-items: center;
        margin-top: ${theme.spacings.small};

        li {
        background: ${theme.colors.Shark};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.Primary};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

      }
    }
  `}
`
