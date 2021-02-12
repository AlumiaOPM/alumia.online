import Logo from '../Logo';

import { MdMail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
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
        <div className={styles.media}>
          <FaWhatsapp color="primary" style={{ margin: '0px 6px 0px 0px' }} />
          <Typography component="p">
            (11) 9-9999-9999
          </Typography>
        </div>
      </div>
    </div>
  )
}
