import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin: ${theme.spacings.medium} 0;
    > h2 {
      margin-bottom: ${theme.spacings.xsmall};
    }
    > div {
      display: flex;
      > img {
        height: 40rem;
        margin-right: ${theme.spacings.xsmall};
        border-radius: ${theme.border.radius};
      }
      > div {
        flex-direction: column;
        display: flex;
        width: 100%;
        height: 40rem;

        justify-content: flex-end;

        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.Primary};
        > p {
          margin-bottom: ${theme.spacings.xsmall};
          font-family: ${theme.font.light};
          font-size: ${theme.font.sizes.large};
          color: ${theme.colors.TextLight};
        }
      }
    }
  `}
`
