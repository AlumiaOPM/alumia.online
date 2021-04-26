import Logo from '../Logo';

import { MdMail } from 'react-icons/md';
import styles from './index.module.css';
import { Typography } from '@material-ui/core';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
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
  )
}
