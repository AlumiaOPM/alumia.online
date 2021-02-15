import React from 'react';

import Link from 'next/link';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  Button,
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
  const [isHeaderSmall, setIfIsHeaderSmall] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = function(){
      if(window.pageYOffset > 100){
        return setIfIsHeaderSmall(true)
      }else if (window.pageYOffset < 100){
        return setIfIsHeaderSmall(false)
      }

      return;
    }
  }, [])

  return (
    <div
      className={`${styles.header} ${styles.smallHeader}`}
      >
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
            <Link href={"/o-que-fazemos"}>o que fazemos</Link>
            <Link href={"/quem-somos"}>quem somos</Link>
            <a 
              onClick={() => store.dispatch({type:"openPopup"})}
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
                  <ListItemText primary="Home"/>
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
              <a onClick={() => store.dispatch({type:"openPopup"})}>
                <ListItem button>
                  <ListItemText primary="Contato" />
                </ListItem>
              </a>
            </List>
          </Drawer>
        </Section>
      </Container>
    </div>
  )
}
