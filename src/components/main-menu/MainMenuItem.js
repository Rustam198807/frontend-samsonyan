import styles from "./MainMenu.module.css";

export default function MainMenuItem({ item }) {
  return (
    <li
      className={`${item.subMenu ? styles.has_subMenu : ""}`}
      key={item.title}
    >
      <a href={item.path}>
        {item.title}{" "}
        {item.subMenu && <img alt="arrow" src="./assets/menu-arrow-icon.png" />}
      </a>
      {item.subMenu && (
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
      )}
    </li>
  );
}
