import styled, { css } from 'styled-components'
import { Form } from '@unform/web'

export const Container = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 40rem;
    min-height: 60rem;

    margin: ${theme.spacings.medium} 0;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background-color: ${theme.colors.Shark};
    border-radius: ${theme.border.radius};
  `}
`
export const AvatarContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: ${theme.spacings.medium};

    img {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
    }
  `}
`
