import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
    && {
      width: auto;
      .pagination {
        width: 100%;
        display: flex;
        list-style: none;
        outline: none;
        li > a {
          padding: 0.5rem 1rem;
          outline: none;
          cursor: pointer;
          border-radius: ${theme.border.radius};
          svg {
            polygon {
              fill: ${theme.colors.Cinnabar};
            }
          }
        }
      }
      .pagination > .active > a,
      .pagination > .active > span,
      .pagination > .active > a:hover,
      .pagination > .active > span:hover,
      .pagination > .active > a:focus,
      .pagination > .active > span:focus {
        background-color: ${theme.colors.Cinnabar};
        border-color: ${theme.colors.Cinnabar};
        outline: none;
      }
      .pagination > li > a,
      .pagination > li > span {
        color: ${theme.colors.TextLight};
      }
      .pagination > li:first-child > a,
      .pagination > li:first-child > span,
      .pagination > li:last-child > a,
      .pagination > li:last-child > span {
        border-radius: unset;
      }
    }
  `}
`
