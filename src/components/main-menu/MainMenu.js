import styles from "./MainMenu.module.css";
import { useProps } from "../../context/MainProvider";
import { menuContent } from "../../content/mainMenuContent";
import MainMenuItem from "./MainMenuItem";

export default function MainMenu() {
  const { mainHeader, scrollYPosition } = useProps();

  return (
    <div
      className={`${styles.main_menu} ${
        scrollYPosition >= 200 + mainHeader.current?.clientHeight
          ? styles.hidden
          : ""
      }`}
    >
      <ul>
        {menuContent.map((item) => (
          <MainMenuItem item={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
}
