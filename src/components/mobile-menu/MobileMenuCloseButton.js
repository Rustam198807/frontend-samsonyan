import styles from "./MobileMenuCloseButton.module.css";
import { useProps } from "../../context/MainProvider";

export default function MobileMenuCloseButton() {
  const { handleCloseMobileMenu } = useProps();
  return (
    <button
      onClick={handleCloseMobileMenu}
      className={styles.mobile_menu_close_icon}
    >
      <img alt="logo" src="./assets/mobile-menu-close-icon.png" />
    </button>
  );
}
