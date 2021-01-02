import styled, { css } from 'styled-components'
import { Form } from '@unform/web'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 40rem;
    min-height: 45rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.medium} ${theme.spacings.small};

    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.Shark};

    img {
      width: 200px;
    }

    h3 {
      color: ${theme.colors.TextLight};
      margin: ${theme.spacings.xsmall};
    }
  `}
`

export const ContentForm = styled(Form)`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;

    p {
      margin-top: ${theme.spacings.xsmall};
      color: ${theme.colors.TextLight};
      text-align: right;
      font-size: ${theme.font.sizes.small};

      a {
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.Primary};
        margin-left: ${theme.spacings.xxxsmall};
      }
    }
  `}
`
