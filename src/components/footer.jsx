import PropTypes from "prop-types";
import { useTheme } from "next-themes";
import { Container } from "./container.jsx";
import { scrollToTop } from "./modules/scrollToTop.js";
import styles from "../styles/footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.body}>
        <FooterInformation />
        <FooterOther />
      </div>
    </Container>
  </footer>
);

const FooterInformation = () => {
  const informationItems = [
    {
      id: 1,
      name: "Oбщество с ограниченной ответственностью «Студия Апрель»",
    },
    {
      id: 2,
      name: "УНП 19353411",
    },
    {
      id: 3,
      name: "Офис г.Минск, ул. Масюковщина, 44-15",
    },
    {
      id: 4,
      name: "Телефон +375293552829",
    },
    {
      id: 5,
      name: "Email: info@april-studio.by",
    },
  ];

  const copyrightItems = [
    {
      id: 1,
      year: 2013,
      text: "april-studio.by",
    },
    {
      id: 2,
      year: new Date().getFullYear(),
      text: "Разработка сайта Я.В. Дворский",
    },
  ];

  return (
    <div className={styles.information}>
      {informationItems.map((informationItem) => (
        <FooterInformationItem
          key={informationItem.id}
          text={informationItem.name}
        />
      ))}
      {copyrightItems.map((copyrightItem) => (
        <Copyright
          key={copyrightItem.id}
          year={copyrightItem.year}
          text={copyrightItem.text}
        />
      ))}
    </div>
  );
};

const FooterInformationItem = ({ text }) => (
  <p className={styles.informationItem}>{text}</p>
);

FooterInformationItem.propTypes = {
  text: PropTypes.string.isRequired,
};

const Copyright = ({ year, text }) => (
  <p className={styles.informationItem}>
    © Copyright <time dateTime={year}>{year}</time> {text}
  </p>
);

Copyright.propTypes = {
  text: PropTypes.string.isRequired,
  year: PropTypes.number,
};

const FooterOther = () => (
  <div className={styles.other}>
    <FooterLinks />
    <SocialNetworks />
  </div>
);

const FooterLinks = () => (
  <div className={styles.links}>
    <ThemeSwitcher />
    <MoveToTop />
  </div>
);

const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === "light" || resolvedTheme === "light"
      ? setTheme("dark")
      : setTheme("light");
  };

  return <span className={styles.themeSwitcher} onClick={toggleTheme} />;
};

const MoveToTop = () => (
  <span className={styles.moveToTop} onClick={() => scrollToTop()} />
);

const SocialNetworks = () => {
  const socialNetworks = [
    {
      id: 1,
      name: "instagram",
      url: "https://www.instagram.com/april_studio.minsk/?hl=ru",
    },
    {
      id: 2,
      name: "facebook",
      url: "https://www.facebook.com/groups/aprilstudio",
    },
  ];

  return (
    <ul className={styles.socialNetworks}>
      {socialNetworks.map((socialNetwork) => (
        <SocialNetwork
          key={socialNetwork.id}
          socialNetwork={socialNetwork.name}
          url={socialNetwork.url}
        />
      ))}
    </ul>
  );
};

const SocialNetwork = ({ socialNetwork, url }) => (
  <li className={styles[socialNetwork]}>
    <a href={url} aria-label={socialNetwork}></a>
  </li>
);

SocialNetwork.propTypes = {
  socialNetwork: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
