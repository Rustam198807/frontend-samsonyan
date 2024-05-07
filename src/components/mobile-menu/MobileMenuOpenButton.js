import styles from "./MobileMenuOpenButton.module.css";
import { useProps } from "../../context/MainProvider";

export default function MobileMenuOpenButton() {
  const { handleOpenMobileMenu } = useProps();
  return (
    <button onClick={handleOpenMobileMenu} className={styles.mobile_menu_icon}>
      <img alt="logo" src="./assets/mobile-menu-icon.png" />
    </button>
  );
}
