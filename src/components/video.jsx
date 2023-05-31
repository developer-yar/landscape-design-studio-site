import { Container } from "./container.jsx";
import { Title } from "./title.jsx";
import styles from "../styles/video.module.scss";

export const Video = () => (
  <div className={styles.videoBlock}>
    <Container>
      <div className={styles.video}>
        <Title
          text="Предлагаем Вам прогуляться по модели участка, 
                созданной нашими дизайнерами методом 3D-графики"
        />
        <video
          className={styles.file}
          width="320"
          height="240"
          preload="auto"
          controls
        >
          <source src="/video/video.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
      </div>
    </Container>
  </div>
);
