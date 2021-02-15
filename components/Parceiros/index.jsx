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
              <a href="https://www.espm.br/" target="_blank">
                <img src="/parceiros/espm.png" alt="ESPM" title="ESPM" />
              </a>
            </div>
            <div className={styles.item}>
              <a href="https://institutosingularidades.edu.br/novoportal/" target="_blank">
                <img src="/parceiros/sing.png" alt="Instituto Singularidades" title="Instituto Singularidades" />
              </a>
            </div>
            <div className={styles.item}>
              <a href="https://www.fecap.br/" target="_blank">
                <img src="/parceiros/fecap.png" alt="FECAP" title="FECAP" />
              </a>
            </div>
            <div className={styles.item}>
              <a href="https://www.opet.com.br/uniopet" target="_blank">
                <img src="/parceiros/opet.png" alt="UniOpet" title="UniOpet" />
              </a>
            </div>

          </div>

          <div className={styles.logos}>

            <div className={styles.item}>
              <a href="https://fundacaofat.org.br/" target="_blank">
                <img src="/parceiros/fat.png" alt="Fundação FAT" title="Fundação FAT" />
              </a>
            </div>
            <div className={styles.item}>
              <a href="https://www.ens.edu.br/" target="_blank">
                <img src="/parceiros/ens.png" alt="ENS" title="ENS" />
              </a>
            </div>
            <div className={styles.item}>
              <a href="https://executiveacademy.com.br/" target="_blank">
                <img src="/parceiros/executive-academy.png" alt="Executive Academy" title="Executive Academy" />
              </a>
            </div>

          </div>

        </div>
      </Container>
    </div>
  )
}
