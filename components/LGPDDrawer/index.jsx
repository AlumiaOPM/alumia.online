import React from 'react';
import Provider from '../Container';
import { Typography, Button, Link } from '@material-ui/core';

import styles from './index.module.css';

export default function LGPDDrawer() {
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);
  const lgpdDrawer = React.useRef();
  const consentPropertyName = 'jdc_consent';
  
  const storageType = {
    getItem: (item) => {
      const cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[item];
    },
    setItem: (item, value) => {
      document.cookie = `${item}=${value};`
    }
  };

  React.useEffect(() => {
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    if (shouldShowPopup)
      setIsDrawerVisible(shouldShowPopup);

  }, []);

  const handleClick = event => {
    storageType.setItem(consentPropertyName, true);
    setIsDrawerVisible(false);
  }

  return (
    <div
      ref={lgpdDrawer}
      className={styles.lgpdDrawer}
      style={{ transform: `translateY(${isDrawerVisible ? '0%' : '150%'})` }}
    >
      <Provider>
        <div className={styles.flexSection}>

          <div className={styles.flexItem}>
            <Typography component="p">
              Usamos cookies para armazenar informações sobre como você usa o nosso site e as páginas que visita. Tudo para tornar sua experiência a mais agradável possível. Para entender os tipos de cookies que utilizamos, acesse nossa <Link href="/politica-de-cookies" target="_blank">política de cookies</Link>. Ao clicar em Eu concordo, você consente com a utilização de cookies.
            </Typography>
          </div>

          <div className={styles.flexItem}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleClick}
              style={{
                fontFamily: "Roboto",
              }}
            >Eu concordo</Button>
          </div>

        </div>
      </Provider>
    </div>
  )
}
