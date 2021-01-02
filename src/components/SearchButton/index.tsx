import React, { ChangeEvent, useState } from 'react'
import * as Styles from './styles'
import { BiSearchAlt2 } from 'react-icons/bi'
type searchProps = {
  onClick: (event: string) => void
}

const SearchButton = ({ onClick }: searchProps) => {
  const [search, setSearch] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      window.document.getElementById('button-search')?.click()
    }
  }
  return (
    <Styles.SearchButtonContainer>
      <input
        type="text"
        placeholder="Search"
        onChange={event => handleChange(event)}
        onKeyPress={event => handleEnter(event)}
      />
      <button id="button-search" onClick={() => onClick(search)}>
        <BiSearchAlt2 />
      </button>
    </Styles.SearchButtonContainer>
  )
}

export default SearchButton
