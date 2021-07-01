import Logo from '../Logo';
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
          </div>
          <div className={styles.containerMedia}>
            <div className={styles.media}>
              <MdMail color="primary" style={{ margin: '0px 6px 0px 0px' }} />
              <Typography component="p">
                contato@alumia.online
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
