import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import Container from '../Container';
import Section from '../Section';
import Logo from '../Logo';

import store from '../../src/store';

import styles from './index.module.css';

export default function Header(props) {
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);

  return (

    <div
      className={`${styles.header} ${styles.smallHeader}`}
    >
      <Head>
        <meta name="google-site-verification" content="VGbDos_WLuRkjHnorNOzJQLns4yHVdKp0fPEo1p2U0E" />
      </Head>

      <Container className={styles.container}>
        <Section className={styles.section}>
          <div
            className={`${styles.logo} ${isDrawerOpened ? styles.logoWorkAround : ''}`}
          >
            <Link href="/">
              <a><Logo /></a>
            </Link>
          </div>

          <div className={styles.menuDesktop}>
            <Link href="/">home</Link>
            <Link href={"/o-que-fazemos"}>
              o que fazemos
            </Link>
            <Link href={"/quem-somos"}>
              quem somos
            </Link>
            <Link href={"/webinars"}>
              webinars
            </Link>
            <a
              href="https://carreiras.alumia.online/"
              target="_blank"
            >trabalhe conosco</a>
            <a href="https://empresas.alumia.online/" target="_blank">
             para empresas
              </a>
            <a
              onClick={() => store.dispatch({ type: "openPopup" })}
            >contato</a>
          </div>

          <div className={styles.menu}>
            <IconButton onClick={() => setIsDrawerOpened(!isDrawerOpened)} style={{ position: 'relative', zIndex: 999 }}>
              <Menu style={{ color: '#333', fontSize: '36px' }} />
            </IconButton>
          </div>

          <Drawer anchor="right" onClick={() => setIsDrawerOpened(false)} open={isDrawerOpened}>
            <List className={styles.list}>
              <Link href="/">
                <ListItem button>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link href="/o-que-fazemos">
                <ListItem button>
                  <ListItemText primary="O que fazemos" />
                </ListItem>
              </Link>
              <Link href="/quem-somos">
                <ListItem button>
                  <ListItemText primary="Quem somos" />
                </ListItem>
              </Link>
              <Link href="/webinars">
                <ListItem button>
                  <ListItemText primary="Webinars" />
                </ListItem>
              </Link>
              <a
                href="https://jobs.kenoby.com/alumia"
                target="_blank"
                style={{
                  textDecoration: 'none',
                  color: '#333'
                }}
              >
                <ListItem button>
                  <ListItemText primary="Trabalhe conosco" />
                </ListItem>
              </a>
              <a onClick={() => store.dispatch({ type: "openPopup" })}>
                <ListItem button>
                  <ListItemText primary="Contato" />
                </ListItem>
              </a>
              <a href="https://empresas.alumia.online/">
              <ListItem button>
                  <ListItemText primary="Para empresas" />
                </ListItem>
              </a>
            </List>
          </Drawer>
        </Section>
      </Container>
    </div>
  )
}