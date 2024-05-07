import Search from "../../components/search/Search";
import MainMenu from "../main-menu/MainMenu";
import Logo from "../logo/Logo";
import MobileMenu from "../mobile-menu/MobileMenu";
import MobileMenuOpenButton from "../mobile-menu/MobileMenuOpenButton";
import styles from "./Header.module.css";
import { useProps } from "../../context/MainProvider";

export default function Header() {
  const { mainHeader, screenWidth } = useProps();

  return (
    <>
      <div ref={mainHeader} className={styles.header_top}>
        {screenWidth <= 768 && <MobileMenuOpenButton />}
        <Logo />
        <Search />
      </div>
      {screenWidth > 768 ? <MainMenu /> : <MobileMenu />}
    </>
  );
}
