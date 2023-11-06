import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import Headroom from "react-headroom";
import { MenuContext, MobileMenuContext } from "./context/menu.jsx";
import classNames from "classnames";
import styles from "../styles/header.module.scss";

export const Header = ({ items }) => {
  const { asPath } = useRouter();

  return (
    <Headroom>
      <header key={asPath} className={styles.header}>
        <div className={styles.body}>
          <HeaderLogotype />
          <MobileMenuContext>
            <HeaderBurger />
            <HeaderMenu items={items} />
          </MobileMenuContext>
        </div>
      </header>
    </Headroom>
  );
};

const HeaderLogotype = () => (
  <Link className={styles.logotype} href="/" aria-label="Главная страница" />
);

const HeaderBurger = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenu();
  };

  return (
    <>
      <div
        className={
          isMenuOpen ? classNames(styles.burger, styles.active) : styles.burger
        }
        onClick={clickHandler}
      >
        <span className={styles.layer} />
      </div>
    </>
  );
};

const HeaderMenu = ({ items }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <>
      <nav
        className={
          isMenuOpen
            ? classNames(styles.navigation, styles.active)
            : styles.navigation
        }
      >
        <ul className={styles.menu}>
          <HeaderDropdownMenu
            name="О нас"
            link="/about-us"
            items={[
              { id: 1, name: "Контакты", link: "/about-us/contacts" },
              { id: 2, name: "Отзывы", link: "/about-us/reviews" },
            ]}
          />
          <HeaderDropdownMenu
            name="Портфолио"
            link="/portfolio"
            items={[
              {
                id: 1,
                name: "Эскизы и визуализация",
                link: "/portfolio/sketches-and-rendering",
              },
              {
                id: 2,
                name: "Реализованные проекты",
                link: "/portfolio/completed-projects",
              },
            ]}
          />
          <HeaderDropdownMenu name="Услуги" link="/works" items={items} />
          <HeaderItem name="Проекты" link="/projects" />
          <HeaderItem name="Оформление заявки" link="/send-request" />
        </ul>
      </nav>
    </>
  );
};

const HeaderItem = ({ name, link }) => (
  <li className={styles.item}>
    <HeaderLink name={name} link={link} />
  </li>
);

const HeaderLink = ({ name, link }) => (
  <Link className={styles.link} href={link}>
    {name}
  </Link>
);

const HeaderDropdownMenu = ({ name, link, items }) => (
  <li className={classNames(styles.item, styles.dropdownMenu)}>
    <HeaderLinkWithIcon name={name} link={link} />
    <HeaderSubmenu items={items} />
  </li>
);

HeaderDropdownMenu.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const HeaderLinkWithIcon = ({ name, link }) => {
  const { isMenuOpen } = useContext(MenuContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    !isMenuOpen && setIsOpen(false);
  }, [isMenuOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={
          isOpen
            ? classNames(styles.linkWithIcon, styles.active)
            : styles.linkWithIcon
        }
      >
        <HeaderLink name={name} link={link} />
        <span className={styles.dropdownIcon} onClick={toggle}></span>
      </div>
    </>
  );
};

const HeaderSubmenu = ({ items }) => (
  <nav className={styles.dropdownBlock}>
    <ul className={styles.submenu}>
      {items?.map((item) => (
        <HeaderSublink key={item.id} name={item.name} link={item.link} />
      ))}
    </ul>
  </nav>
);

HeaderSubmenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const HeaderSublink = ({ name, link }) => (
  <li className={styles.subitem}>
    <Link className={styles.sublink} href={link}>
      {name}
    </Link>
  </li>
);

[HeaderItem, HeaderLink, HeaderLinkWithIcon, HeaderSublink].map(
  (el) =>
    (el.propTypes = {
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
);
