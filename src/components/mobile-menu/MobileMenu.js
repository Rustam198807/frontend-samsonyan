import { menuContent } from "../../content/mainMenuContent";
import Logo from "../logo/Logo";
import MobileMenuItem from "./MobileMenuItem";
import styles from "./MobileMenu.module.css";
import MobileMenuCloseButton from "./MobileMenuCloseButton";
import { useProps } from "../../context/MainProvider";

export default function MobileMenu() {
  const { isMobileMenuOpen, handleCloseMobileMenu } = useProps();

  return (
    <>
      <div
        className={`${styles.mobile_menu} ${
          !isMobileMenuOpen ? styles.hidden : ""
        }`}
      >
        <div className={styles.mobile_menu_header}>
          <Logo />
          <MobileMenuCloseButton />
        </div>
        <ul>
          {menuContent.map((item) => (
            <MobileMenuItem item={item} key={item.title} />
          ))}
        </ul>
      </div>
      <div
        onClick={handleCloseMobileMenu}
        className={`${styles.menu_overlay} ${
          !isMobileMenuOpen ? styles.hidden : ""
        }`}
      ></div>
    </>
  );
}
