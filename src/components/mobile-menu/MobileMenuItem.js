import { useState } from "react";
import styles from "./MobileMenu.module.css";

export default function MobileMenuItem({ item }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMobileSubMenu = () => {
    setIsSubMenuOpen((e) => !e);
  };

  return (
    <li
      onClick={handleMobileSubMenu}
      className={`${item.subMenu ? styles.has_subMenu : ""} ${
        isSubMenuOpen ? styles.menu_is_opened : ""
      }`}
      key={item.title}
    >
      <a
        onClick={(e) => (item.subMenu ? e.preventDefault(e) : null)}
        href={`${!item.subMenu ? item.path : ""}`}
      >
        {item.title}
        {item.subMenu && <img alt="arrow" src="./assets/menu-arrow-icon.png" />}
      </a>
      {item.subMenu &&
        (isSubMenuOpen ? (
          <ul className={styles.sub_menu}>
            {item.subMenu.map((subItem) => (
              <li key={subItem.title}>
                <a href={subItem.path}>
                  <span>{subItem.title}</span>
                  <img alt="arrow" src="./assets/menu-arrow-right-icon.png" />
                </a>
              </li>
            ))}
          </ul>
        ) : null)}
    </li>
  );
}
