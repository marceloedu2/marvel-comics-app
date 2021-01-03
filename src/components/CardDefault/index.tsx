import React from 'react'
import Link from 'next/link'
import * as Styles from './styles'
import { BsPlusSquare } from 'react-icons/bs'

type CardDefaultProps = {
  link: string
}

const CardDefault = ({ link }: CardDefaultProps) => {
  return (
    <Link href={link}>
      <Styles.Container>
        <Styles.Content>
          <BsPlusSquare />
        </Styles.Content>
      </Styles.Container>
    </Link>
  )
}

export default CardDefault
