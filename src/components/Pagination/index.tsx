import React from 'react'
import * as Styles from './styles'
import { FcNext, FcPrevious } from 'react-icons/fc'
import ReactPaginate from 'react-paginate'

type PaginationProps = {
  maxCount: number
  currentPage: number
  onPageChange: (data: { selected: number }) => void
}

const Pagination = ({
  maxCount = 0,
  currentPage = 0,
  onPageChange,
  ...props
}: PaginationProps) => {
  return (
    <Styles.PaginationContainer>
      <ReactPaginate
        previousLabel={<FcPrevious />}
        nextLabel={<FcNext />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={maxCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage}
        {...props}
      />
    </Styles.PaginationContainer>
  )
}

export default Pagination
