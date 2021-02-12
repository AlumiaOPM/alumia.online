import { Typography } from '@material-ui/core';

import Container from '../Container';


import styles from './index.module.css';

export default function Parceiros() {

  return (
    <div className={styles.parceiros}>
      <Container>
        <div className={styles.containerParceiros}>
          <Typography component="h4" variant="h4">
            Nossos parceiros
          </Typography>
          <div className={styles.logos}>

            <div className={styles.item}>
              <img src="/parceiros/espm.png" alt="ESPM" title="ESPM" />
            </div>
            <div className={styles.item}>
              <img src="/parceiros/executive-academy.png" alt="Executive Academy" title="Executive Academy" />
            </div>
            <div className={styles.item}>
              <img src="/parceiros/opet.png" alt="UniOpet" title="UniOpet" />
            </div>
            <div className={styles.item}>
              <img src="/parceiros/fecap.png" alt="FECAP" title="FECAP" />
            </div>

          </div>

          <div className={styles.logos}>

            <div className={styles.item}>
              <img src="/parceiros/fat.png" alt="Fundação FAT" title="Fundação FAT" />
            </div>
            <div className={styles.item}>
              <img src="/parceiros/ens.png" alt="ENS" title="ENS" />
            </div>
            <div className={styles.item}>
              <img src="/parceiros/sing.png" alt="Instituto Singularidades" title="Instituto Singularidades" />
            </div>

          </div>

        </div>
      </Container>
    </div>
  )
}
