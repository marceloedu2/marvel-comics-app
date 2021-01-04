import React from 'react'
import Link from 'next/link'
import * as Styles from './styles'
import { useAuth } from '@/hooks/AuthHook'
import { AiOutlineLogout } from 'react-icons/ai'
import { useRouter } from 'next/router'

const NavBar = () => {
  const { signOut, user } = useAuth()
  const router = useRouter()
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.ContentLogo>
          <Link href="/favorites">
            <a>
              <img src="/img/marvel.svg" alt="Marvel" />
            </a>
          </Link>
        </Styles.ContentLogo>
        <Styles.LinksContent>
          <Link href="/favorites">
            <Styles.LinkButton active={router.pathname === '/favorites'}>
              My Favorites
            </Styles.LinkButton>
          </Link>
          <Link href="/comics">
            <Styles.LinkButton active={router.pathname === '/comics'}>
              Comics
            </Styles.LinkButton>
          </Link>
          <Link href="/characters">
            <Styles.LinkButton active={router.pathname === '/characters'}>
              Characters
            </Styles.LinkButton>
          </Link>
        </Styles.LinksContent>
        <Styles.ContentProfile>
          <Link href="/profile">
            <a>
              <Styles.Profile>
                <div>
                  <h4>{user?.name}</h4>
                  <a>
                    <p>My profile</p>
                  </a>
                </div>
                <img
                  src={
                    'https://cdn.dribbble.com/users/957216/screenshots/4507653/thanosface.png?compress=1&resize=400x400'
                  }
                  alt=""
                />
              </Styles.Profile>
            </a>
          </Link>
          <button onClick={signOut}>
            <AiOutlineLogout />
          </button>
        </Styles.ContentProfile>
      </Styles.Content>
    </Styles.Container>
  )
}

export default NavBar
