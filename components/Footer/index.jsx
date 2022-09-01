import Logo from '../Logo';
import LogoCubo from '../LogoCubo';
import Link from 'next/link';

import { MdMail } from 'react-icons/md';
import { Typography } from '@material-ui/core';
import Container from '../Container';
import styles from './index.module.css';

export default function Footer() {
  const Nav = () => (
    <nav>
      <a></a>
      <a></a>
      <a></a>
      <a></a>
      <a></a>
    </nav>
  );

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <a>
                <Logo />
              </a>
            </Link>
            <div className={styles.logoCubo}>
            <Link href={"/"}>
              <a>
                <LogoCubo />
              </a>
            </Link>
            
          </div>
          </div>
          
          <div className={styles.containerMedia}>
            <div className={styles.media}>
              
              <Typography component="p">
              OPM Educacional SA
              </Typography>
              <Typography component="p">
                27.557.874/0001-09
              </Typography>
              <Typography component="p">
              <MdMail color="primary" style={{ margin: '0px 6px -4px 0px' }} />
                contato@alumia.online
              </Typography>
              <Typography component="p">
              R. Des. Guimarães, 122, Água Branca - São Paulo
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
