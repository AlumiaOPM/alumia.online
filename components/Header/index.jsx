import React from 'react';

import Link from 'next/link';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { MdHome, MdForum, MdNote, MdPhone } from 'react-icons/md';
import { Menu } from '@material-ui/icons';

import Container from '../Container';
import Section from '../Section';
import Logo from '../Logo';
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
            <Link href={'/'}>
              <Logo />
            </Link>
          </div>
          
          <div className={styles.menuDesktop}>
            <a href="#">O que fazemos</a>
            <a href="#">Quem somos</a>
            <a href="#">Contato</a>
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
                  <ListItemIcon>
                    <MdHome />
                  </ListItemIcon>
                  <ListItemText primary="O que fazemos"/>
                </ListItem>
              </Link>
              <Link href="/">
                <ListItem button>
                  <ListItemIcon>
                    <MdForum />
                  </ListItemIcon>
                  <ListItemText primary="Quem somos" />
                </ListItem>
              </Link>
              <Link href="/">
                <ListItem button>
                  <ListItemIcon>
                    <MdPhone />
                  </ListItemIcon>
                  <ListItemText primary="Contato" />
                </ListItem>
              </Link>
            </List>
          </Drawer>
        </Section>
      </Container>
    </div>
  )
}
