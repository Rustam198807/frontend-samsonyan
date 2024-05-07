import { useEffect, useRef, useState } from "react";
import { useProps } from "../../context/MainProvider";
import styles from "./Search.module.css";

export default function Search() {
  const [isInputOpened, setIsInputOpened] = useState(false);
  const { searchQuery, setSearchQuery } = useProps();
  const searchInput = useRef();

  useEffect(() => {
    !isInputOpened && setSearchQuery("");
    isInputOpened && searchInput.current.focus();
  }, [isInputOpened, setSearchQuery]);

  return (
    <div className={styles.search_box}>
      <input
        ref={searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={!isInputOpened ? styles.hidden : ""}
      />

      <button onClick={() => setIsInputOpened((e) => !e)}>
        <img
          src={
            !isInputOpened
              ? "./assets/search-icon.png"
              : "./assets/search-close-icon.png"
          }
          alt="search_icon"
        />
      </button>
    </div>
  );
}
