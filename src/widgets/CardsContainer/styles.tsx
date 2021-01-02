import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.xlarge} 0 ${theme.spacings.xsmall} 0;
  `}
`
export const ChildrenContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: ${theme.spacings.xsmall} 0;
  `}
`
export const TitleContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.xsmall};
    > h2 {
      border-left: 0.3rem solid ${theme.colors.Cinnabar};
      padding: ${theme.spacings.xxxsmall} 0 ${theme.spacings.xxxsmall}
        ${theme.spacings.xxsmall};
      font-weight: ${theme.font.normal};
    }
  `}
`
