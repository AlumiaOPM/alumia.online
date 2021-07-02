import Container from '../Container';
import WebinarCard from '../WebinarCard';

import Typography from '@material-ui/core/Typography';

import styles from './index.module.css';

export default function WebinarWrapper({ webinars }) {
  const formattedWebinars = webinars
    .map(([
      id,
      nome,
      desc,
      participantes,
      data,
      link,
      linkContent,
      image
    ]) => ({ id, nome, desc, participantes, data, link, linkContent, image }));

  // Remove first object of array (metadata)
  formattedWebinars.shift();

  return (
    <div className={styles.webinarWrapper}>
      <Container>
        <Typography component="h4" variant="h4" className={styles.title}>
          Fique por dentro de nossos <span style={{ color: "#F15A22" }}>webinars!</span>
        </Typography>
        <div className={styles.flexSection}>
          {formattedWebinars && formattedWebinars.map(item => (
            <WebinarCard 
              data={item} 
              key={item.id} 
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
