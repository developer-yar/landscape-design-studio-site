import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const MenuContext = createContext();

export const MobileMenuContext = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? document.documentElement.classList.add("html_non-scrollabled")
      : document.documentElement.removeAttribute("class");
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

MobileMenuContext.propTypes = {
  children: PropTypes.node.isRequired,
};
